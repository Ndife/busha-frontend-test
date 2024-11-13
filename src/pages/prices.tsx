import React from "react";
import styled from "styled-components";

// Styled components for the PricesPage layout
const PricesPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// Component to display the Prices page title only
const PricesPage: React.FC = () => {
  return (
    <PricesPageContainer>
      <PageTitle>Prices</PageTitle>
    </PricesPageContainer>
  );
};

export default PricesPage;
