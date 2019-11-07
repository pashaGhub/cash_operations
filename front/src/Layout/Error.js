import React, { useContext } from "react";
import AppContext from "../AppContext";

function Error() {
  const { error } = useContext(AppContext);

  return <div className="Error">{error.message}</div>;
}

export default Error;
