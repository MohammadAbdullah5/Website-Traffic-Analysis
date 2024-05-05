import React, { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

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
  
  useEffect(() => {
    // Simulate loading for a certain duration (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clear timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);


  const rank = Data && Data.length > 0 ? Data[0].GlobalRank : null;
  const webVisits = Data && Data.length > 0 ? Data[0].WebsiteVisits : null;
  const bounceRate = Data && Data.length > 0 ? Data[0].BounceRate : null;
  const pagesVisit = Data && Data.length > 0 ? Data[0].PagePerVisit : null;
  const IndustryRank = Data && Data.length > 0 ? Data[0].CategoryRank : null;
  const avgDuration =
    Data && Data.length > 0 ? Data[0].AverageVisitDuration : null;

  const date = new Date(avgDuration);
  const hours = ("0" + date.getUTCHours()).slice(-2);
  const minutes = ("0" + date.getUTCMinutes()).slice(-2);
  const seconds = ("0" + date.getUTCSeconds()).slice(-2);
  const avgTime = `${hours}:${minutes}:${seconds}`;
  const WebName = Data && Data.length > 0 ? Data[0].WebsiteName : null;
  const description = Data && Data.length > 0 ? Data[0].Description : null;

  function formatLargeNumber(number) {
    const suffixes = ["", "K", "M", "B", "T"];
    const scale = Math.floor(Math.log10(number) / 3);
    const scaledNumber = number / Math.pow(10, scale * 3);
    const formattedNumber = scaledNumber.toFixed(1);
    return formattedNumber + suffixes[scale];
  }

  const webVisitsUpdated = formatLargeNumber(webVisits);

  return (
    <>
    
      {isLoading && (
        <div className="dark:bg-gray-800 fixed top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="dark:bg-transparent">
            <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                <DotLoader color="#36d7b7" size={60} />
            </div>
        </div>
    </div>
      )}

      {!isLoading && Data.length === 0 && (
        <div style={{ color: "blue" }}>
          <img className = "h-98 w-full "src="https://www.webhopers.com/wp-content/uploads/2017/02/How-to-Deal-with-the-404-Error-for-Search-Engine-Optimization.jpg"/>
        </div>
      )}

      {!isLoading && Data.length > 0 && (
        <>
        <div className="dark:bg-gray-800">
        <div className="dark:bg-transparent">
          <div className="max-w-3xl mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl pt-10 px-4 lg:px-8 rounded-sm">
            <div className="md:flex bg-gradient-to-br from-blue-700 to-purple-400 text-white rounded-xl">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm font-bold">
                  {WebName}
                </div>
                <p className="mt-2">{description}</p>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-10">
            <div className="mb-10 space-y-4 px-6 md:px-0 mt-10">
              <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Traffic Analysis
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                  Total Visits
                </h2>
                <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    {webVisitsUpdated ? webVisitsUpdated : "Data not found"}
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                  Global Rank
                </h2>
                <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    {rank}
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                  Industry Rank
                </h2>
                <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    {IndustryRank}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-10">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                  Bounce Rate
                </h2>
                <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    {bounceRate} %
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                  Average Time Duration
                </h2>
                <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    {avgTime}
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                  Pages Per Visit
                </h2>
                <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    {pagesVisit}
                  </span>
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
        </>
      )}
      
    </>
  );
};

export default TrafficSection;
