import React, { useState, useEffect } from "react";
import Sidebar from "./components/shared/Sidebar";
import Navbar from "./components/shared/Navbar";
import styled from "styled-components";
import WalletPage from "./pages/wallets";
import PricesPage from "./pages/prices";
import { WalletProvider } from "./context/WalletContext";

const menuItems = [
  { label: "Wallets", link: "/wallets", component: <WalletPage /> },
  { label: "Prices", link: "/prices", component: <PricesPage /> },
  { label: "Peer2Peer", link: "/peer2peer", component: <h1>Peer2Peer</h1> },
  { label: "Activity", link: "/activity", component: <h1>Activity</h1> },
  { label: "Settings", link: "/settings", component: <h1>Settings</h1> },
];

const MainContainer = styled.div`
  padding: 0 9%;
  display: flex;
  margin-top: 100px;
  gap: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5%;
    margin-top: 50px;
  }
  
  @media (max-width: 480px) {
  padding: 0 4%;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  min-height: 100vh;
  @media (max-width: 768px) {
  margin: 0;
  padding: 0;
  }
`;


const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>(getInitialRoute());

  // Initialize route based on current pathname
  function getInitialRoute(): string {
    return window.location.pathname.split("/")[1] || "wallets";
  }

  // Update activeItem when back/forward navigation occurs
  useEffect(() => {
    const handlePopState = () => setActiveItem(getInitialRoute());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle menu item click, updating URL and active item without page reload
  const handleMenuItemClick = (link: string) => {
    window.history.pushState(null, "", link);
    setActiveItem(link.split("/")[1] || "wallets");
  };

  // Render content based on active menu item
  const renderContent = () => {
    const activePage = menuItems.find((item) => item.link === `/${activeItem}`);
    return activePage?.component || <WalletPage />;
  };

  return (
    <>
      <Navbar menuItems={menuItems} onMenuItemClick={handleMenuItemClick} />
      <MainContainer>
        <Sidebar
          menuItems={menuItems}
          activeItem={activeItem}
          onMenuItemClick={handleMenuItemClick}
        />
        <WalletProvider>
          <ContentArea>{renderContent()}</ContentArea>
        </WalletProvider>
      </MainContainer>
    </>
  );
};

export default App;
