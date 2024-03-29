import { Currency, useCheckedCurrencies } from "../../context/DataContext";
import checkImage from "./../../assets/check.png";

interface CheckboxProps {
	label: string;
	currency: Currency;
}

function Checkbox({ label, currency }: CheckboxProps) {
	const { checkedCurrencies, addCurrency, removeCurrency } =
		useCheckedCurrencies();

	const checked = checkedCurrencies.includes(currency);

	// Function to handle checkbox change
	const handleCheckboxChange = () => {
		if (checked) {
			removeCurrency(currency);
		} else {
			addCurrency(currency);
		}
	};

	return (
		<div className="row">
			<label>
				<input
					type="checkbox"
					checked={checked}
					onChange={handleCheckboxChange}
				/>
				<span>{checked && <img src={checkImage} width="47px" />}</span>
			</label>
			<p className="currency-code">{label}</p>
		</div>
	);
}

export default Checkbox;
