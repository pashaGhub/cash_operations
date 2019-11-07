import React from "react";
import { ContextProvider } from "./AppContext";

import Layout from "./Layout";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Layout />
      </div>
    </ContextProvider>
  );
}

export default App;
