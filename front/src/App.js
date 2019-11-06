import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const apiOperations = "/api/operations";

  function useFetch(api, callBack) {
    useEffect(() => {
      fetch(api)
        .then(res => res.json())
        .then(json => {
          callBack(json);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setError({ type: error, message: "Something went wrong 😥" });
          setLoading(false);
        });
    }, [api]);
  }

  useFetch(apiOperations, setOperations);
  console.log(operations);
  console.log(error);

  return (
    <div className="App">
      {loading && <div>Please Wait, we are loading your information</div>}
      {!error && !loading ? (
        <Dashboard data={operations} />
      ) : (
        <p>{error.message}</p>
      )}
    </div>
  );
}

export default App;
