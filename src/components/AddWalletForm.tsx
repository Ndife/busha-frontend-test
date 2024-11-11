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

// AddWalletForm component
const AddWalletForm: React.FC<{ closeModal: () => void, refreshWallet: () => void }> = ({ closeModal, refreshWallet }) => {
  const [wallets, setWallets] = useState<IWallets[]>([]);
  const [walletCurrency, setWalletCurrency] = useState<string>("");
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

  const handleCreateWallet = async () => {
    try {
      setIsSubmitting(true);
      const accountService = new AccountService();
      await accountService.createAccount({ currency: walletCurrency as Currency });
      refreshWallet();
      setIsSubmitting(false);
      closeModal(); // Close modal on success
    } catch (error) {
      setIsSubmitting(false);
      setNetworkError(true);
    }
  };

  if (error) {
    return (
      <ErrorBoundary
          message="Network Error"
          onRetry={fetchWallets}
        />
    )
  }

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={50} width={5} />
      </LoaderContainer>
    )
  }

  return (
    <>
        <SelectBox
          label="Select Wallet"
          value={walletCurrency}
          onChange={(e) => setWalletCurrency(e.target.value)}
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
