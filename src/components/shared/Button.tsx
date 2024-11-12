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
  min-width: 100px;
  
  &:hover {
    background-color: #45a049;
  }
`;

const LoaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, customStyles, isLoading = false }) => (
  <StyledButton onClick={onClick} style={customStyles} disabled={isLoading}>
    {isLoading ? (
      <LoaderStyle>
        <Loader size={16} width={2} />
      </LoaderStyle>
    ) : (
      label
    )}
  </StyledButton>
);

export default Button;
