import { ArcElement, Chart as ChartJS, PieController } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
import { userProfile } from "../../constants/userProfile";

ChartJS.register(ArcElement, PieController, ChartDataLabels);

const labels = userProfile.pageSummary.map(label => label.title);

const data = {
  labels: labels,
  datasets: [
    {
      label: `Last 6 months: `,
      data: userProfile.pageSummary.map(data => data.value),
      backgroundColor: [
        "rgba(225,225,225, 1)",
        "rgba(75, 78, 109, 1)",
        "rgba(132, 220, 198, 1)",
        "rgba(134, 19, 136, 1)",
        "rgba(84, 221, 248, 1)",
        "rgba(255, 193, 7, 1)",
      ],
      borderColor: "rgba(132, 220, 198, 0.2)",
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        font: {
          size: 16,
        },
      },
    },
    tooltip: {
      boxPadding: 10,
      callbacks: {
        label: function (context) {
          const dataValues = userProfile.pageSummary.map(data => data.value);
          const totalSum = dataValues.reduce((acc, curr) => acc + curr, 0);
          const valuePercentage = (context.parsed / totalSum) * 100;
          return `${valuePercentage.toFixed(2)}%`;
        },
      },
    },
    datalabels: {
      display: false,
    },
    title: {
      display: true,
      text: "Last 6 months",
      font: {
        size: 16,
      },
    },
  },
};

const PageSummary = props => {
  return <Pie options={options} data={data} {...props} />;
};
export default PageSummary;
