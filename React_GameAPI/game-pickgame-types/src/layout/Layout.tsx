import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainPage from "./MainPage";

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header onSidebarToggle={handleSidebarToggle} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      <MainPage isSidebarOpen={isSidebarOpen} />
    </>
  );
}

export default Layout;
