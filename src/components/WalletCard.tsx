import React, { useState } from "react";
import styled from "styled-components";
import RightArrowCircleIcon from "./icons/RightArrowCircleIcon";
import { IAccounts } from "../apis/handlers/accounts/interfaces";
import ngn from "../../src/assets/images/ngn.svg";
import btc from "../../src/assets/images/btc.svg";
import ltc from "../../src/assets/images/ltc.svg";
import eth from "../../src/assets/images/eth.svg";

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
  gap: 12px;
`;

const WalletImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin: 0;
  margin-bottom: 0;
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
  color: #9AA5B1;
  font-size: 14px;
`;

const BalanceAndCurrencyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const BalanceText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const CurrencyText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const IconContainer = styled.div`
  margin-left: auto;
`;

const WalletCard: React.FC<IAccounts> = ({ type, imgURL, name, balance, currency }) => {
  const [imageSrc, setImageSrc] = useState(imgURL);

  const getWalletIcon = (): string => {
    switch (currency) {
      case "NGN":
        return ngn;
      case "BTC":
        return btc;
      case "LTC":
        return ltc;
      case "ETH":
        return eth;
      default:
        return btc;
    }
  };

  const handleImageError = () => {
    setImageSrc(getWalletIcon());
  };

  const getBalance = () => {
    if (type === 'fiat') {
      return new Intl.NumberFormat('en-NG', {
        maximumFractionDigits: 8,
        minimumFractionDigits: 0,
        style: 'currency',
        currency,
      }).format(parseFloat(balance));
    }

    return (
      <>
        <BalanceText>{balance} </BalanceText>
        <CurrencyText>{currency}</CurrencyText>
      </>
    );
  };

  return (
    <WalletCardContainer>
      <WalletImageWithName>
        <WalletImage src={imageSrc} alt={`${name} logo`} onError={handleImageError} />
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
