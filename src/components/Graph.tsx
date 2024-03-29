import { fetchCurrencyDataForRange } from "../utils/fetchData";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useCheckedCurrencies } from "../context/DataContext";
import { useEffect, useState } from "react";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

function Graph() {
	const { startDate, endDate, checkedCurrencies } = useCheckedCurrencies();
	const [usdData, setUsdData] = useState<number[]>();
	const [eurData, setEurData] = useState<number[]>();
	const [cnyData, setCnyData] = useState<number[]>();
	const [labels, setLabels] = useState<string[]>();
	const [data, setData] = useState<string[]>();

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
		},
	};

	useEffect(() => {
		let chartData: any[] = [];
		if (checkedCurrencies?.length) {
			checkedCurrencies.forEach((item) => {
				if (item == "eur") {
					chartData.push({
						label: "Евро",
						data: eurData,
						borderColor: "rgb(255, 99, 132)",
						backgroundColor: "rgba(255, 99, 132, 0.5)",
					});
				} else if (item == "usd") {
					chartData.push({
						label: "Доллар",
						data: usdData,
						borderColor: "rgb(53, 162, 235)",
						backgroundColor: "rgba(53, 162, 235, 0.5)",
					});
				} else if (item == "cny") {
					chartData.push({
						label: "Юань",
						data: cnyData,
						borderColor: "rgb(53, 162, 15)",
						backgroundColor: "rgba(53, 162, 15, 0.5)",
					});
				}
			});
		}
		setData({ labels, datasets: chartData });
	}, [checkedCurrencies]);

	useEffect(() => {
		(async () => {})();
		fetchCurrencyDataForRange(startDate, endDate)
			.then((currencyDataArray) => {
				const dates: string[] = currencyDataArray.map((el) => el.date);
				setLabels(dates);
				const eurValues: number[] = currencyDataArray
					.map((el) => el.rub)
					.map((el) => el.eur);

				setEurData(eurValues);
				const usdValues: number[] = currencyDataArray
					.map((el) => el.rub)
					.map((el) => el.usd);

				setUsdData(usdValues);
				const cnyValues: number[] = currencyDataArray
					.map((el) => el.rub)
					.map((el) => el.cny);

				setCnyData(cnyValues);
				setData({
					labels: dates,
					datasets: [
						{
							label: "Евро",
							data: eurValues,
							borderColor: "rgb(255, 99, 132)",
							backgroundColor: "rgba(255, 99, 132, 0.5)",
						},
						{
							label: "Доллар",
							data: usdValues,
							borderColor: "rgb(53, 162, 235)",
							backgroundColor: "rgba(53, 162, 235, 0.5)",
						},
						{
							label: "Юань",
							data: cnyValues,
							borderColor: "rgb(53, 162, 15)",
							backgroundColor: "rgba(53, 162, 15, 0.5)",
						},
					],
				});
			})
			.catch((error) => {
				console.error("Error fetching currency data for the range:", error);
			});
	}, []);

	return (
		<>
			<div className="chart">
				{data && <Line options={options} data={data} />}
			</div>
			<style>{`
				.chart {
					width: 60%;
				}
			`}</style>
		</>
	);
}

export default Graph;
