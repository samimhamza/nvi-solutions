import { useState } from 'react';
import { useCheckedCurrencies } from '../context/DataContext';
import Checkbox from './hooks/CheckBox';
import DateInput from './hooks/DatePicker';

function CheckBoxContainer() {
  const { setStartDateInterval, setEndDateInterval } = useCheckedCurrencies();
  const [selectedStartDate, setSelectedStartDate] =
    useState(setStartDateInterval);
  const [selectedEndDates, setSelectedEndDates] = useState(setEndDateInterval);

  const handleStartDate = (date: string) => {
    setSelectedStartDate(date);
  };

  const handleEndDate = (date: string) => {
    setSelectedEndDates(date);
  };

  return (
    <div className='checkbox'>
      <div className='container'>
        <div className='currency-checkboxes'>
          <Checkbox label='Евро' currency='eur' />
          <Checkbox label='Доллар' currency='usd' />
          <Checkbox label='Юань' currency='cny' />
        </div>
        <div className='date'>
          <div className='date-start'>
            <p className='date-text'>Дата с</p>
            <DateInput value={selectedStartDate} onChange={handleStartDate} />
          </div>
          <div className='date-end'>
            <p className='date-text'>Дата по</p>
            <DateInput value={selectedEndDates} onChange={handleEndDate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckBoxContainer;
