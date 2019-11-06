import React from "react";
import "./index.scss";

function Dashboard({ data }) {
  console.log(data);

  return (
    <div className="Dashboard">
      <h3>Result</h3>
      <ul>
        {data.map(item => (
          <li>{item.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
