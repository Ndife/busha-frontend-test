import React from "react";
import styled from "styled-components";
import RightArrowCircleIcon from "./icons/RightArrowCircleIcon";
import { IAccounts } from "../apis/handlers/accounts/interfaces";

const WalletCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111111;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 240px;
  margin: 10px;
  text-align: center;
  gap: 8px;
`;

const WalletImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const WalletImageWithName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const WalletName = styled.h3`
  font-size: 1.2em;
  margin: 0;
`;

const BalanceAndCurrencyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const BalanceText = styled.span`
  font-size: 1em;
  font-weight: bold;
  min-width: 100px; /* Ensure balance text has a unique and fixed width */
`;

const CurrencyText = styled.span`
  font-size: 0.9em;
  color: #bbb;
`;

const IconContainer = styled.div`
  margin-left: auto;
`;

const WalletCard: React.FC<IAccounts> = ({ imgURL, name, balance, currency }) => {
  return (
    <WalletCardContainer>
      <WalletImageWithName>
        <WalletImage src={imgURL} alt={`${name} logo`} />
        <WalletName>{name}</WalletName>
      </WalletImageWithName>
      
      <BalanceAndCurrencyContainer>
        <BalanceText>{balance}</BalanceText> 
        <CurrencyText>{currency}</CurrencyText>
      </BalanceAndCurrencyContainer>

      <IconContainer>
        <RightArrowCircleIcon />
      </IconContainer>
    </WalletCardContainer>
  );
};

export default WalletCard;
