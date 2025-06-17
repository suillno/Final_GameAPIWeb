import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainPage from "./MainPage";

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("home");

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header onSidebarToggle={handleSidebarToggle} />
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />
      <MainPage isSidebarOpen={isSidebarOpen} selectedTab={selectedTab} />
    </>
  );
}

export default Layout;
