import { useState } from 'react';
import { useCheckedCurrencies } from '../context/DataContext';
import Checkbox from './hooks/CheckBox';
import DateInput from './hooks/DatePicker';

function CheckBoxContainer() {
  const { setStartDateInterval, setEndDateInterval } = useCheckedCurrencies();
  const [selectedStartDate, setSelectedStartDate] =
    useState(setStartDateInterval);
  const [selectedDate, setSelectedDate] = useState(setStartDateInterval);

  console.log(selectedDate);

  const handleStartDate = (date: string) => {
    setSelectedStartDate(date);
  };

  const handleEndDate = (date: string) => {
    setEndDateInterval();
  };

  return (
    <div className='checkbox'>
      <div className='container'>
        <Checkbox label='Евро' currency='eur' />
        <Checkbox label='Доллар' currency='usd' />
        <Checkbox label='Юань' currency='cny' />
        <div>
          <div>
            <p>Дата с</p>
            <DateInput value={selectedStartDate} onChange={handleStartDate} />
          </div>
          <div>
            <p>Дата по</p>
            <DateInput value={selectedDate} onChange={handleEndDate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckBoxContainer;
