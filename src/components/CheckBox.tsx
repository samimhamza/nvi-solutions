import { useState } from 'react';
import checkImage from './../assets/check.png'; // Importing the image

function CheckBox() {
  const [checkedEuro, setCheckedEuro] = useState<boolean>(false);
  const [checkedDollar, setCheckedDollar] = useState<boolean>(false);
  const [checkedYuan, setCheckedYuan] = useState<boolean>(false);

  const handleCheckboxChangeEuro = () => setCheckedEuro(!checkedEuro);

  const handleCheckboxChangeDollar = () => setCheckedDollar(!checkedDollar);

  const handleCheckboxChangeYuan = () => setCheckedYuan(!checkedYuan);

  return (
    <div className='checkbox'>
      <div className='container'>
        <div className='row'>
          <label>
            <input
              type='checkbox'
              checked={checkedEuro}
              onChange={handleCheckboxChangeEuro}
            />
            <span>{checkedEuro && <img src={checkImage} width='50px' />}</span>
          </label>
          <p className='currency-code'>Евро</p>
        </div>
        <div className='row'>
          <label>
            <input
              type='checkbox'
              checked={checkedDollar}
              onChange={handleCheckboxChangeDollar}
            />
            <span>
              {checkedDollar && <img src={checkImage} width='50px' />}
            </span>
          </label>
          <p className='currency-code'>Доллар</p>
        </div>
        <div className='row'>
          <label>
            <input
              type='checkbox'
              checked={checkedYuan}
              onChange={handleCheckboxChangeYuan}
            />
            <span>{checkedYuan && <img src={checkImage} width='50px' />}</span>
          </label>
          <p className='currency-code'>Юань</p>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
