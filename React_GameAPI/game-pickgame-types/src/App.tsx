import React from "react";
import GlobalStyle from "./style/GlobalReset";
import Header from "./layout/Header";
import MainPage from "./layout/MainPage";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Sidebar />
      <MainPage />
    </div>
  );
}

export default App;
