import React, { useEffect, useState } from "react";

const TrafficSection = ({ searchText }) => {
  const [Data, setData] = useState(-99);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const webURL = searchText;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/getData?webURL=${webURL}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rank data");
        }
        const data = await response.json();

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const rank = Data && Data.length > 0 ? Data[0].GlobalRank : null;
  const webVisits = Data && Data.length > 0 ? Data[0].WebsiteVisits : null;
  const bounceRate = Data && Data.length > 0 ? Data[0].BounceRate : null;
  const pagesVisit = Data && Data.length > 0 ? Data[0].PagePerVisit : null;
  const IndustryRank = Data && Data.length > 0 ? Data[0].CategoryRank : null;
  const avgDuration =
    Data && Data.length > 0 ? Data[0].AverageVisitDuration : null;

  const date = new Date(avgDuration);

  const hours = ("0" + date.getUTCHours()).slice(-2); // Ensure leading zero if needed
  const minutes = ("0" + date.getUTCMinutes()).slice(-2);
  const seconds = ("0" + date.getUTCSeconds()).slice(-2);

  const avgTime = `${hours}:${minutes}:${seconds}`;

  function formatLargeNumber(number) {
    // Define suffixes for different scales
    const suffixes = ["", "K", "M", "B", "T"];
    // Determine the scale (K, M, B, etc.)
    const scale = Math.floor(Math.log10(number) / 3);
    // Calculate the scaled number
    const scaledNumber = number / Math.pow(10, scale * 3);
    // Format the number with one decimal place
    const formattedNumber = scaledNumber.toFixed(1);
    // Append the scale suffix
    return formattedNumber + suffixes[scale];
}

const webVisitsUpdated = formatLargeNumber(webVisits);


  

  console.log(rank);
  console.log(webVisits);
  console.log(bounceRate);
  console.log(pagesVisit);
  console.log(IndustryRank);
  console.log(avgTime);

  return (
    <>
      <div
        aria-hidden="true"
        class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div class="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
        <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-10">
        <div class="mb-10 space-y-4 px-6 md:px-0 mt-10">
          <h2 class="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Traffic Analysis
          </h2>
        </div>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <div class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 class="text-lg sm:text-xl font-medium text-white mb-2">
              Total Visits
            </h2>
            <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
              <span class="text-3xl sm:text-4xl font-bold text-white">
                {webVisitsUpdated}
              </span>
            </p>
          </div>
          <div class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 class="text-lg sm:text-xl font-medium text-white mb-2">
              Global Rank
            </h2>
            <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
              <span class="text-3xl sm:text-4xl font-bold text-white">
                {rank}
              </span>
            </p>
          </div>
          <div class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 class="text-lg sm:text-xl font-medium text-white mb-2">
              Industry Rank
            </h2>
            <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
              <span class="text-3xl sm:text-4xl font-bold text-white">
                {IndustryRank}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-10">
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <div class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 class="text-lg sm:text-xl font-medium text-white mb-2">
              Bounce Rate
            </h2>
            <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
              <span class="text-3xl sm:text-4xl font-bold text-white">
                {bounceRate} %
              </span>
            </p>
          </div>
          <div class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 class="text-lg sm:text-xl font-medium text-white mb-2">
              Average Time Duration
            </h2>
            <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
              <span class="text-3xl sm:text-4xl font-bold text-white">
                {avgTime}
              </span>
            </p>
          </div>
          <div class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 class="text-lg sm:text-xl font-medium text-white mb-2">
              Pages Per Visit
            </h2>
            <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
              <span class="text-3xl sm:text-4xl font-bold text-white">
                {pagesVisit}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrafficSection;
