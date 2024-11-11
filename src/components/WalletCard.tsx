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
`;

const CurrencyText = styled.span`
  font-size: 0.9em;
  font-weight: bold;
`;

const IconContainer = styled.div`
  margin-left: auto;
`;

const WalletCard: React.FC<IAccounts> = ({type, imgURL, name, balance, currency }) => {

  const getBalance = () => {
    if(type === 'fiat') return new Intl.NumberFormat('en-NG', {
        maximumFractionDigits: 8,
        minimumFractionDigits: 0,
        style: 'currency',
        currency
    }).format(parseFloat(balance))

    return (
     <>
      <BalanceText>{balance}</BalanceText> 
      <CurrencyText>{currency}</CurrencyText>
     </>
    )
}

  return (
    <WalletCardContainer>
      <WalletImageWithName>
        <WalletImage src={imgURL} alt={`${name} logo`} />
        <WalletName>{name}</WalletName>
      </WalletImageWithName>
      
      <BalanceAndCurrencyContainer>
        {getBalance()}
      </BalanceAndCurrencyContainer>

      <IconContainer>
        <RightArrowCircleIcon />
      </IconContainer>
    </WalletCardContainer>
  );
};

export default WalletCard;
