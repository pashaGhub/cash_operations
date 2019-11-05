import React, { useState, useEffect } from "react";

function App() {
  const [operations, setOperations] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const api = "/api/operations";
  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(json => {
        setOperations(json);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [api]);

  console.log(operations);

  return (
    <div className="App">
      {isLoading && <div>Please Wait, we are loading your information</div>}
      {!isLoading && <div>{operations[0].date}</div>}
    </div>
  );
}

export default App;
