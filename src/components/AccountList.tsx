import React, { useState } from "react";
import styled from "styled-components";
import AddWalletForm from "./AddWalletForm";
import IconButton from "./shared/IconButton";
import PlusIcon from "./icons/PlusIcon";
import Modal from "./shared/Modal";
import WalletCard from "./WalletCard";
import CancelIcon from "./icons/CancelIcon";
import { IAccounts } from "../apis/handlers/accounts/interfaces";

const WalletsContainer = styled.div`
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;


const WalletsGrid = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 4%;
  }
`;


const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

   @media (max-width: 480px) {
   width: 100%;
  }
`;

const HorizontalRule = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 10px 0;
`;

const NoWalletsMessage = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;

const CancelButton = styled.div`
  cursor: pointer;
  color: #e63946;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const NewWalletTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddNewWalletSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15%;
`;

const ModalDescription = styled.p`
  font-size: 14px;
  color: #333;
  margin-top: 10px;
`;

const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

interface AccountListProps {
  wallets: IAccounts[];
}

const AccountList: React.FC<AccountListProps> = ({ wallets }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <WalletsContainer>
      <HeaderSection>
        <SectionTitle>Wallets</SectionTitle>
        <IconButton icon={<PlusIcon />} label="Add new wallet" onClick={openModal} />
      </HeaderSection>
      <HorizontalRule />
      {wallets.length > 0 ? (
        <WalletsGrid>
          {wallets.map((wallet) => (
            <WalletCard key={wallet.id} {...wallet} />
          ))}
        </WalletsGrid>
      ) : (
        <NoWalletsMessage>No wallets found.</NoWalletsMessage>
      )}
      <Modal isOpen={isModalOpen}>
        <AddNewWalletSection>
          <NewWalletTitle>
            <ModalTitle>Add New Wallet</ModalTitle>
            <CancelButton onClick={closeModal} aria-label="Close button">
              <CancelIcon />
            </CancelButton>
          </NewWalletTitle>
          <ModalDescription>
            The crypto wallet will be created instantly and be available in your list of wallets.
          </ModalDescription>
          <AddWalletForm closeModal={closeModal} />
        </AddNewWalletSection>
      </Modal>
    </WalletsContainer>
  );
};

export default AccountList;
