export const API_ENDPOINTS = {
  getOperations: "/api/operations",
  getCashInCommission:
    "http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in",
  getCashOutNatural:
    "http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural",
  getCashOutJuridical:
    "http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical"
};

export const APP_CONTEXT = {
  defaultOperationsInfo: {
    date: Date, // operation date in format `Y-m-d`
    user_id: Number, // user id, integer
    user_type: String, // user type, one of “natural”(natural person) or “juridical”(legal person)
    type: String, // operation type, one of “cash_in” or “cash_out”
    operation: {
      amount: Number, // operation amount(for example `2.12` or `3`)
      currency: String // operation currency `EUR`
    }
  }
};
