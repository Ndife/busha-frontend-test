import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

interface ButtonProps {
  label: string;
  onClick: () => void;
  customStyles?: React.CSSProperties;
  isLoading?: boolean;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #111;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #45a049;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, customStyles, isLoading = false }) => (
  <StyledButton onClick={onClick} style={customStyles} disabled={isLoading}>
    {isLoading ? <Loader /> : label}
  </StyledButton>
);

export default Button;
