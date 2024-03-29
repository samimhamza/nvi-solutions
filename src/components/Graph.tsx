import { fetchCurrencyDataForRange } from '../utils/fetchData';

function Graph() {
  // Example usage:
  const startDate = '2024-12-12';
  const endDate = '2024-12-19';

  fetchCurrencyDataForRange(startDate, endDate)
    .then((currencyDataArray) => {
      console.log('Currency data for the range:', currencyDataArray);
      // Process the fetched data as needed
    })
    .catch((error) => {
      console.error('Error fetching currency data for the range:', error);
    });
  return <div className='graph'></div>;
}

export default Graph;
