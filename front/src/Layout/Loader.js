import React from "react";
import LoaderBars from "react-loader-spinner";

const loaderProps = {
  type: "Rings",
  color: "rgba(63, 81, 80, 0.85)",
  height: "100%",
  width: "100%"
};

function Loader() {
  return <LoaderBars classname="LoaderBar" {...loaderProps} />;
}

export default Loader;
