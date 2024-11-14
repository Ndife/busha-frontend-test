import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../icons/Logo";

const NavbarContainer = styled.div`
  width: 100%;
  background-color: #fff;
  color: #333;
  position: fixed;
  top: 0;
  padding: 0.6% 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 1% 0;
  }

  &:hover {
    background-color: #f8f8f8;
  }
`;

const ItemsContainer = styled.div`
  padding: 0 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: padding 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 5%;
  }

  @media (max-width: 480px) {
    padding: 0 4%;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoContainer = styled(FlexBox)`
  gap: 4px;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #555;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 16px;
  }
`;

const UserFullName = styled.div`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const UserProfile = styled(FlexBox)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const UserProfileMobile = styled(FlexBox)`
  @media (min-width: 768px) {
    display: none;
  }
  flex-direction: column;
  width: 100%;
  font-size: 32px;
  margin-bottom: 30px;
`;

const MobileMenuButton = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 30px;
    height: 3px;
    background-color: #333;
    transition: background-color 0.3s ease;
  }

  &:hover div {
    background-color: #f5f7fa;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const DropdownMenu = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  padding-top: 60px;
  font-size: 18px;
  align-items: flex-start;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease forwards;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const MenuItem = styled.li<{ isActive?: boolean }>`
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  background-color: ${({ isActive }) => (isActive ? "#F5F7FA" : "transparent")};
  transition: background-color 0.2s ease, font-weight 0.3s ease;

  &:hover {
    background-color: #f5f7fa;
  }
`;

interface NavbarProps {
  menuItems: { label: string; link: string }[];
  onMenuItemClick: (link: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuItems, onMenuItemClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const user = { firstName: "Oluwatobi", lastName: "Akindunjoye" };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuItemClick = (link: string) => {
    onMenuItemClick(link);
    setIsMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <ItemsContainer>
        <LogoContainer>
          <Logo />
          busha
        </LogoContainer>
        <UserProfile>
          <Avatar>{user.firstName[0]}</Avatar>
          <UserFullName>{`${user.firstName} ${user.lastName}`}</UserFullName>
        </UserProfile>
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div />
          <div />
          <div />
        </MobileMenuButton>
      </ItemsContainer>
      <DropdownMenu ref={menuRef} isOpen={isMenuOpen}>
        <UserProfileMobile>
          <Avatar>{user.firstName[0]}</Avatar>
          <UserFullName>{`${user.firstName} ${user.lastName}`}</UserFullName>
        </UserProfileMobile>
        {menuItems.map(({ label, link }) => (
          <MenuItem key={link} onClick={() => handleMenuItemClick(link)}>
            {label}
          </MenuItem>
        ))}
      </DropdownMenu>
    </NavbarContainer>
  );
};

export default Navbar;