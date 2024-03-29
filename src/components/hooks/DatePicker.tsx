import React, { useState } from 'react';

interface DateInputProps {
  value: string;
  onChange: (date: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
  const [date, setDate] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setDate(newDate);
    onChange(newDate);
  };

  return <input type='date' value={date} onChange={handleChange} />;
};

export default DateInput;
