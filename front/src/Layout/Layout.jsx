import React, { useContext } from "react";
import AppContext from "../AppContext";
import "./index.scss";

import Error from "./Error.jsx";
import Loader from "./Loader.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";

function Layout() {
  const { loading, error } = useContext(AppContext);

  return (
    <div className="Layout">
      {loading && <Loader />}
      {!error && !loading ? <Dashboard /> : <Error />}
    </div>
  );
}

export default Layout;
