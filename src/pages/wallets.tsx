import React, { useEffect } from "react";
import styled from "styled-components";
import ErrorBoundary from "../components/shared/ErrorBoundary";
import Loader from "../components/shared/Loader";
import { AccountService } from "../apis/handlers/accounts";
import AccountList from "../components/AccountList";
import { useWalletContext } from "../context/WalletContext";

const WalletPageContainer = styled.div`
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 60%;
  transform: translateX(-50%);
  text-align: center;

  @media (max-width: 739px) {
    left: 50%;
  }
`;

const ErrorContainer = styled.div`
  position: relative;
  top: -15%;
  left: -10%;

  @media (max-width: 739px) {
    left: -5%;
  }
`;

const WalletPage: React.FC = () => {
  const { state, dispatch } = useWalletContext();

  const fetchAccounts = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const accountService = new AccountService();
      const fetchedWallets = await accountService.getAccounts();
      dispatch({ type: "SET_WALLETS", payload: fetchedWallets });
    } catch {
      dispatch({ type: "SET_ERROR", payload: true });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  if (state.loading) {
    return (
      <LoaderContainer>
        <Loader size={50} width={5} />
      </LoaderContainer>
    );
  }

  if (state.error) {
    return (
      <ErrorContainer>
        <ErrorBoundary message="Network Error" onRetry={fetchAccounts} />
      </ErrorContainer>
    );
  }

  return (
    <WalletPageContainer>
      <AccountList wallets={state.wallets} />
    </WalletPageContainer>
  );
};

export default WalletPage;
