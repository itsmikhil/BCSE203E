import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale);

const EmpChart = ({ employee }) => {
  const labels = employee.map(e => e.name);
  const values = employee.map(e => e.sal);

  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Salary",
        data: values,
        backgroundColor: "blue"
      }
    ]
  };

  const pieData = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: ["blue", "green", "orange", "purple", "red"]
      }
    ]
  };

  return (
    <>
      <Bar data={barData} />
      <Pie data={pieData} />
    </>
  );
};

export default EmpChart;