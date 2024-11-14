import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 200px;
  margin-top: 15px;
  ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li<{ isActive: boolean }>`
  list-style-type: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  background-color: ${({ isActive }) => (isActive ? "#F5F7FA" : "transparent")};

  &:hover {
    background-color: #F5F7FA;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
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
          <a href={item.link}>{item.label}</a>
        </MenuItem>
      ))}
    </ul>
  </SidebarContainer>
);

export default Sidebar;
