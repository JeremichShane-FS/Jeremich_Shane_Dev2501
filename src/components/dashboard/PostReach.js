import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { userProfile } from "../../constants/userProfile";

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, PointElement);

const data = {
  labels: userProfile.postReach.labels,
  datasets: [
    {
      label: `Last 6 months: ${userProfile.postReach.value}`,
      data: userProfile.postReach.data,
      backgroundColor: "rgba(132, 220, 198, 1)",
      borderColor: "rgba(132, 220, 198, 0.2)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    subtitle: {
      display: true,
      text: "Custom Chart Subtitle",
    },
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
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  tension: 0.3,
};

const PostReach = () => {
  return <Line key={Math.random()} data={data} options={options} />;
};

export default PostReach;
