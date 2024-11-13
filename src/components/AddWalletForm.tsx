import React, { useState, useEffect } from "react";
import Button from "./shared/Button";
import SelectBox from "./shared/SelectBox";
import styled from "styled-components";
import CancelIcon from "./icons/CancelIcon";
import FailedNetworkIcon from "./icons/FailedNetworkIcon";
import Loader from "./shared/Loader";
import { WalletService } from "../apis/handlers/wallets";
import { IWallets } from "../apis/handlers/wallets/interfaces";
import { AccountService } from "../apis/handlers/accounts";
import { Currency } from "../apis/handlers/accounts/enum";
import ErrorBoundary from "./shared/ErrorBoundary";
import { useWalletContext } from "../context/WalletContext"; // Import context
import { IAccounts } from "../apis/handlers/accounts/interfaces";

const NetworkErrorMessage = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffe6e6;
  color: #e63946;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  align-items: center;
  border: 1px solid rgba(230, 57, 69, 0.2);
`;

const NetworkErrorIconAndText = styled.div`
  display: flex;
  gap: 6px;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const ErrorContainer = styled.div`
  position: absolute;
  top: -5%;
  left: 30%;

   @media (max-width: 739px) {
    left: 25%;
  }
`;

const AddWalletForm: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const { dispatch } = useWalletContext();
  const [wallets, setWallets] = useState<IWallets[]>([]);
  const [walletCurrency, setWalletCurrency] = useState<IWallets | undefined>();
  
  const [networkError, setNetworkError] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchWallets = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const walletService = new WalletService();
      const fetchedWallets = await walletService.getWallets();
      setWallets(fetchedWallets);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWallets();
  }, []);

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWallet = wallets.find((wallet) => wallet.currency === e.target.value);
    if (selectedWallet) {
      setWalletCurrency({
        currency: selectedWallet.currency,
        name: selectedWallet.name,
        type: selectedWallet.type,
        imgURL: selectedWallet.imgURL,
      });
    }
  };

  const handleCreateWallet = async () => {
    if (walletCurrency) {
      try {
        setIsSubmitting(true);
        const accountService = new AccountService();
        await accountService.createAccount({ currency: walletCurrency.currency as Currency });
    
        const accountData: IAccounts = {
          currency: walletCurrency.currency,
          hold: "0",
          pending_balance: "0",
          balance: "0",
          name: walletCurrency.name,
          type: walletCurrency.type,
          deposit: false,
          payout: false,
          imgURL: walletCurrency.imgURL,
        };
    
        dispatch({ type: 'ADD_WALLET', payload: accountData });
    
        setIsSubmitting(false);
        closeModal();
      } catch (error) {
        setIsSubmitting(false);
        setNetworkError(true);
      }
    };
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorBoundary
          message="Network Error"
          onRetry={fetchWallets}
        />
      </ErrorContainer>
    );
  }

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={50} width={5} />
      </LoaderContainer>
    );
  }

  return (
    <>
      <SelectBox
        label="Select Wallet"
        value={walletCurrency?.currency ?? ""}
        onChange={handleCurrencyChange}
        options={wallets.map((wallet) => wallet.currency)}
        placeholder="Select wallet"
      />

      <Button
        customStyles={{ width: "222px", alignSelf: "center" }}
        label="Create Wallet"
        onClick={handleCreateWallet}
        isLoading={isSubmitting}
      />

      {networkError && (
        <NetworkErrorMessage>
          <NetworkErrorIconAndText>
            <FailedNetworkIcon />
            <span>Network Error</span>
          </NetworkErrorIconAndText>
         
          <CancelIcon color="#D72C0D" size={10} />
        </NetworkErrorMessage>
      )}
    </>
  );
};

export default AddWalletForm;
