import React from "react";
import { ContextProvider } from "./AppContext.js";

import { Layout } from "./Layout";

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
