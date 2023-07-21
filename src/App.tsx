import "./App.css";
import Header from "./containers/Header";
import Main from "./containers/Main";

import listings from "./data.json";

function App() {
  return (
    <>
      <Header />
      <Main listings={listings} />
    </>
  );
}

export default App;
