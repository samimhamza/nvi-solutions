import axios from 'axios';
interface CurrencyData {
  currency: string;
  rate: number;
}

export const fetchCurrencyDataForRange = async (
  startDate: string,
  endDate: string
): Promise<CurrencyData[]> => {
  const currencyDataArray: CurrencyData[] = [];

  // Convert start and end date strings to Date objects
  const currentDate = new Date(startDate);
  const endDateObj = new Date(endDate);

  // Iterate over the range of dates and fetch data for each date
  while (currentDate <= endDateObj) {
    const formattedDate = currentDate.toISOString().slice(0, 10);
    try {
      const currencyData = await fetchDataForDate(formattedDate);
      currencyDataArray.push(currencyData);
    } catch (error) {
      // Handle errors if necessary
      console.error(`Error fetching data for date ${formattedDate}:`, error);
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return currencyDataArray;
};

export const fetchDataForDate = async (date: string): Promise<CurrencyData> => {
  
  try {
    const response = await axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/rub.json`
    );


    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
