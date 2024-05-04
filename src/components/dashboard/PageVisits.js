import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { AppContext } from "../../contexts";

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement, PointElement);

const PageVisits = () => {
  const { userProfile } = useContext(AppContext);

  const data = {
    labels: userProfile.pageVisits.labels,
    datasets: [
      {
        label: `Last 6 months: ${userProfile.pageVisits.value}`,
        data: userProfile.pageVisits.data,
        backgroundColor: ["rgba(132, 220, 198, 1)", "rgba(84, 221, 248, 1)"],
        borderColor: "rgba(132, 220, 198, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        boxPadding: 10,
        callbacks: {
          label: function (context) {
            return `${context.parsed.y}`;
          },
        },
      },
    },
  };
  return <Bar key={Math.random()} data={data} options={options} />;
};

export default PageVisits;
