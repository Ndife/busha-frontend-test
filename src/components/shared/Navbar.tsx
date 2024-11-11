import React from "react";
import styled from "styled-components";
import Logo from "../icons/Logo";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LogoCainter = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
  font-size: 20px;
  font-weight: bold;
  padding-left: 10%;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 10%;
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
`;

const UserFullName = styled.div`
  font-size: 14px;
`;

const Navbar = () => {
  const user = {
    firstName: "Oluwatobi",
    lastName: "Akindunjoye",
  };

  return (
    <NavbarContainer>
      <LogoCainter>
        <Logo />
        busha
      </LogoCainter>
      <UserProfile>
        <Avatar>{user.firstName[0]}</Avatar>
        <UserFullName>{`${user.firstName} ${user.lastName}`}</UserFullName>
      </UserProfile>
    </NavbarContainer>
  );
};

export default Navbar;
