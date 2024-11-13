import React, { useState } from "react";
import styled from "styled-components";
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

    @media (max-width: 768px) {
    padding: 1 0%;
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

const LogoContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
`;

const UserFullName = styled.div`
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 739px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
  }
`;

const DropdownMenu = styled.ul<{ isOpen: boolean }>`
  list-style-type: none;
  padding-left: 0;
  margin-top: -13px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #fff;
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.li<{ isActive: boolean }>`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  background-color: ${({ isActive }) => (isActive ? "#F5F7FA" : "transparent")};

  &:hover {
    background-color: #F5F7FA;
  }
`;

interface NavbarProps {
  menuItems: { label: string; link: string }[];
  onMenuItemClick: (link: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ menuItems, onMenuItemClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = {
    firstName: "Oluwatobi",
    lastName: "Akindunjoye",
  };

  const handleMenuItemClick = (link: string) => {
    onMenuItemClick(link)
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
      <DropdownMenu isOpen={isMenuOpen}>
        {menuItems.map((item) => (
          <MenuItem key={item.link} isActive={false} onClick={() => handleMenuItemClick(item.link)}>
            {item.label}
          </MenuItem>
        ))}
      </DropdownMenu>
    </NavbarContainer>
  );
};

export default Navbar;
