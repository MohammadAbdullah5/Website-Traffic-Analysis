import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const GenderChart = ({ searchText }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/getGenderData?webURL=${searchText}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchText]); // Fetch data when searchText changes

  const maleCount = data.find((entry) => entry.gender.trim() === "Male");
  const femaleCount = data.find((entry) => entry.gender.trim() === "Female");

  const chartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [
          maleCount ? maleCount.NumberodUsers : 0,
          femaleCount ? femaleCount.NumberodUsers : 0,
        ],
        backgroundColor: ["blue", "pink"],
      },
    ],
  };

  const options = {
    cutout: 115,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            let value = context.formattedValue || '';
            if (label) {
              label += ': ';
            }
            if (value) {
              value = ' ' + value;
            }
            return label + value;
          }
        }
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="charts relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-10">
        <div className="mb-10 space-y-4 px-6 md:px-0 mt-10">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Traffic Analysis
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <Pie data={chartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderChart;
