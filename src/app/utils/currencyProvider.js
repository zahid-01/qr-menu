// components/CurrencyProvider.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { detectUserCurrency } from "./currency";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    detectUserCurrency().then(setCurrency);
  }, []);

  return (
    <CurrencyContext.Provider value={currency}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
