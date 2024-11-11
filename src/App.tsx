import React, { useState, useEffect } from "react";
import Sidebar from "./components/shared/Sidebar";
import Navbar from "./components/shared/Navbar";
import styled from "styled-components";
import WalletPage from "./pages/wallets";
import PricesPage from "./pages/prices";

const menuItems = [
  { label: "Wallets", link: "/wallets", component: <WalletPage /> },
  { label: "Prices", link: "/prices", component: <PricesPage /> },
  { label: "Peer2Peer", link: "/peer2peer", component: <h1>Peer2Peer</h1> },
  { label: "Activity", link: "/activity", component: <h1>Activity</h1> },
  { label: "Settings", link: "/settings", component: <h1>Settings</h1> },
];

const MainContainer = styled.div`
  margin-left: 10%;
  display: flex;
  margin-top: 60px;
`;

const ContentArea = styled.div`
  padding: 20px;
  flex: 1;
  min-height: 100vh;
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
      <Navbar />
      <MainContainer>
        <Sidebar
          menuItems={menuItems}
          activeItem={activeItem}
          onMenuItemClick={handleMenuItemClick}
        />
        <ContentArea>{renderContent()}</ContentArea>
      </MainContainer>
    </>
  );
};

export default App;
