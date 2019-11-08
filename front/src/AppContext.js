import React, { useState, useEffect } from "react";
import moment from "moment";

import { API_ENDPOINTS, APP_CONTEXT } from "./constants";

//This function ordering array of objects by they provided key ascendingly
const orderAscen = (arr, key) => {
  if (!arr) {
    return null;
  }

  if (typeof key === "boolean" || !key) {
    return arr;
  }

  return arr.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
};

const AppContext = React.createContext();

function ContextProvider({ children }) {
  const [operations, setOperations] = useState([
    APP_CONTEXT.defaultOperationsInfo
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cashIn, setCashIn] = useState(null);
  const [cashOutNatural, setCashOutNatural] = useState(null);
  const [cashOutJuridical, setCashOutJuridical] = useState(null);

  useEffect(() => {
    async function fetchData(api, callBack) {
      const response = await fetch(api);

      if (response.ok) {
        const json = await response.json();
        callBack(json);
      } else {
        setError({ type: error, message: "Something went wrong 😥" });
      }

      setLoading(false);
    }

    fetchData(API_ENDPOINTS.getOperations, data => {
      setOperations(orderAscen(data, "date"));
    });
    fetchData(API_ENDPOINTS.getCashInCommission, setCashIn);
    fetchData(API_ENDPOINTS.getCashOutNatural, setCashOutNatural);
    fetchData(API_ENDPOINTS.getCashOutJuridical, setCashOutJuridical);
  }, []);

  const cashInFee = cash => {
    if (cashIn) {
      const {
        percents,
        max: { amount }
      } = cashIn;
      const fees = (cash / 100) * percents;
      return fees > amount ? amount : fees;
    }

    return null;
  };

  const cashOutNaturalFee = ({ date, user_id, user_type, type, cash, ind }) => {
    if (cashOutNatural) {
      const {
        percents,
        week_limit: { amount }
      } = cashOutNatural;

      //counting the amount of cash-out money during the week until the current operation
      const weeklyCashOut = operations
        .filter(
          (opr, oprInd) =>
            new Date(date) >= new Date(opr.date) &&
            moment(new Date(opr.date)).isSame(new Date(date), "week") &&
            ind !== oprInd &&
            user_id === opr.user_id &&
            user_type === opr.user_type &&
            type === opr.type
        )
        .reduce((res, current) => res + current.operation.amount, 0);

      return weeklyCashOut > amount && weeklyCashOut !== cash
        ? (cash / 100) * percents
        : cash > amount
        ? ((cash - amount) / 100) * percents
        : weeklyCashOut > amount
        ? (cash / 100) * percents
        : null;
    }

    return null;
  };

  const cashOutJuridicalFee = cash => {
    if (cashOutJuridical) {
      const {
        percents,
        min: { amount }
      } = cashOutJuridical;
      const fees = (cash / 100) * percents;
      return fees > amount ? fees : amount;
    }

    return null;
  };

  return (
    <AppContext.Provider
      value={{
        operations,
        loading,
        error,
        cashInFee,
        cashOutNaturalFee,
        cashOutJuridicalFee
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
export { ContextProvider };
export { orderAscen };
