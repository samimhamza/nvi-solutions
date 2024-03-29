import { fetchCurrencyDataForRange } from '../utils/fetchData';

function Graph() {
  // Example usage:
  const startDate = '2024-03-12';
  const endDate = '2024-03-19';

  fetchCurrencyDataForRange(startDate, endDate)
    .then((currencyDataArray) => {
      console.log('Currency data for the range:', currencyDataArray);

      const filter = currencyDataArray.map((el) => el.date);
      const filter2 = currencyDataArray
        .map((el) => el.rub)
        .map((el) => el.$wen);

      console.log(filter);
      console.log(filter2);
    })
    .catch((error) => {
      console.error('Error fetching currency data for the range:', error);
    });
  return <div className='graph'></div>;
}

export default Graph;
