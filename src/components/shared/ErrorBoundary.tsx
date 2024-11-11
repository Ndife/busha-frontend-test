import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import CircledNetworkErrorIcon from '../icons/CircledNetworkErrorIcon';

// Styled Components
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px;
  color: #3e4c59;
  text-align: center;
  overflow: hidden;
`;

const IconWrapper = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

// ErrorBoundary Component
interface ErrorBoundaryProps {
  message?: string;
  onRetry: () => void;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ message = "Network Error", onRetry }) => (
  <ErrorContainer>
    <IconWrapper>
      <CircledNetworkErrorIcon />
    </IconWrapper>
    <ErrorMessage>{message}</ErrorMessage>
    <Button onClick={onRetry} label="Try Again" />
  </ErrorContainer>
);

export default ErrorBoundary;
