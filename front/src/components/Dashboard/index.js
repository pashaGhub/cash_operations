import React from "react";
import "./index.scss";

function Dashboard({
  data,
  cashInFee,
  cashOutNaturalFee,
  cashOutJuridicalFee
}) {
  return (
    <div className="Dashboard">
      <h3>Result</h3>
      <ul>
        {data.map((item, ind) => {
          const {
            date,
            user_id,
            user_type,
            type,
            operation: { amount }
          } = item;

          function roundUp(numb) {
            return (Math.ceil(numb * 100) / 100).toFixed(2);
          }

          switch (type) {
            case "cash_in":
              return <li key={ind}>{roundUp(cashInFee(amount))}</li>;
            case "cash_out":
              if (user_type === "natural") {
                return (
                  <li key={ind}>
                    {roundUp(
                      cashOutNaturalFee({
                        date,
                        user_id,
                        user_type,
                        type,
                        cash: amount,
                        ind
                      })
                    )}
                  </li>
                );
              }

              if (user_type === "juridical") {
                return (
                  <li key={ind}>{roundUp(cashOutJuridicalFee(amount))}</li>
                );
              }

            default:
              break;
          }
        })}
      </ul>
    </div>
  );
}

export default Dashboard;
