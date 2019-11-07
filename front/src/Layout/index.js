import React, { useContext } from "react";
import AppContext from "../AppContext";
import "./index.scss";

import Error from "./Error";
import Loader from "./Loader";
import Dashboard from "./Dashboard";

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
