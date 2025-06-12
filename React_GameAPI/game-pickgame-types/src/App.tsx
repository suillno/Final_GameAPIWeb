import GlobalReset from "./style/GlobalReset";
import Layout from "./layout/Layout";
import "react-circular-progressbar/dist/styles.css";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyle />
      <Layout />
    </div>
  );
}

export default App;
