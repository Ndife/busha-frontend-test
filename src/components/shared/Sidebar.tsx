import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 200px;
  padding: 20px;
`;

const MenuItem = styled.li<{ isActive: boolean }>`
  list-style-type: none;
  padding: 10px;
  cursor: pointer;
    font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  background-color: ${({ isActive }) => (isActive ? "#F5F7FA" : "transparent")};

  &:hover {
    background-color: #F5F7FA;
  }
`;

interface SidebarProps {
  menuItems: { label: string; link: string }[];
  activeItem: string;
  onMenuItemClick: (link: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, activeItem, onMenuItemClick }) => (
  <SidebarContainer>
    <ul>
      {menuItems.map((item) => (
        <MenuItem
          key={item.link}
          isActive={item.link === `/${activeItem}`}
          onClick={() => onMenuItemClick(item.link)}
        >
          {item.label}
        </MenuItem>
      ))}
    </ul>
  </SidebarContainer>
);

export default Sidebar;
