import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ErrorBoundary from "../components/shared/ErrorBoundary";
import Loader from "../components/shared/Loader";
import { AccountService } from "../apis/handlers/accounts";
import { IAccounts } from "../apis/handlers/accounts/interfaces";
import AccountList from "../components/AccountList";

const WalletPageContainer = styled.div`
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 60%;
  transform: translateX(-50%);
  text-align: center;
`;

const ErrorContainer = styled.div`
  position: relative;
  top: -15%;
  left: -10%;
`;

const WalletPage: React.FC = () => {
  const [wallets, setWallets] = useState<IAccounts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchAccounts = async () => {
    setLoading(true);
    setError(false);
    try {
      const accountService = new AccountService();
      const fetchedWallets = await accountService.getAccounts();
      setWallets(fetchedWallets);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleNewWallet = () => fetchAccounts();

  if (loading) {
    return (
      <LoaderContainer>
        <Loader size={50} width={5} />
      </LoaderContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorBoundary message="Network Error" onRetry={fetchAccounts} />
      </ErrorContainer>
    );
  }

  return (
    <WalletPageContainer>
        <AccountList wallets={wallets} onRefresh={handleNewWallet} />
    </WalletPageContainer>
  );
};

export default WalletPage;
