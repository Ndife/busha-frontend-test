import React from "react";
import styled from "styled-components";

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: transparent;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #f5f7fa;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

const IconButton: React.FC<IconButtonProps> = ({ icon, label, onClick, style }) => (
  <StyledButton onClick={onClick} style={style}>
    <IconContainer>{icon}</IconContainer>
    {label}
  </StyledButton>
);

export default IconButton;
