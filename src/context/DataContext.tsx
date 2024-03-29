import React, { ReactNode, createContext, useContext, useState } from 'react';

// Define the type for currency
export type Currency = 'eur' | 'usd' | 'cny' | 'rub';
export type DateIn = string;

// Define the type for context
interface CheckedCurrenciesContextType {
  checkedCurrencies: Currency[];
  addCurrency: (currency: Currency) => void;
  removeCurrency: (currency: Currency) => void;
  setStartDateInterval: string;
  setEndDateInterval: string;
  startDate: string;
  endDate: string;
}

// Date
const today: Date = new Date();
const sevenDaysAgo: Date = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
const formattedToday: string = formatDate(today);
const formattedSevenDaysAgo: string = formatDate(sevenDaysAgo);
function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// Create a context to manage the state of checked currencies
const CheckedCurrenciesContext = createContext<CheckedCurrenciesContextType>({
  addCurrency: () => {},
  removeCurrency: () => {},
  checkedCurrencies: ['rub', 'eur', 'usd', 'cny'],
  startDate: formattedSevenDaysAgo,
  endDate: formattedToday,
  setStartDateInterval: '',
  setEndDateInterval: '',
});

// Provider component to wrap your application and provide the context
export const CheckedCurrenciesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [checkedCurrencies, setCheckedCurrencies] = useState<Currency[]>([]);
  const [startDate, setStartDate] = useState<string>(formattedSevenDaysAgo);
  const [endDate, setEndDate] = useState<string>(formattedToday);

  // Function to add a currency to the checkedCurrencies array
  const addCurrency = (currency: Currency) => {
    setCheckedCurrencies([...checkedCurrencies, currency]);
  };

  // Function to remove a currency from the checkedCurrencies array
  const removeCurrency = (currency: Currency) => {
    setCheckedCurrencies(checkedCurrencies.filter((c) => c !== currency));
  };

  return (
    <CheckedCurrenciesContext.Provider
      value={{
        checkedCurrencies,
        addCurrency,
        removeCurrency,
        startDate: formattedSevenDaysAgo,
        endDate: formattedToday,
        setStartDateInterval: '',
        setEndDateInterval: '',
      }}
    >
      {children}
    </CheckedCurrenciesContext.Provider>
  );
};

// Custom hook to consume the CheckedCurrenciesContext
export const useCheckedCurrencies = (): CheckedCurrenciesContextType => {
  return useContext(CheckedCurrenciesContext);
};
