import React, { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import { default as api } from "../Store/apiSlice";

const TrafficSection = ({ searchText }) => {


  const { data, isFetching, isSuccess, isError } = api.useGetAllDataQuery(searchText);

  
    const websiteData = data && data.websiteData && data.websiteData.length > 0 ? data.websiteData[0] : null;
    const rank = websiteData ? websiteData.GlobalRank : null;
    const webVisits = websiteData ? websiteData.WebsiteVisits : null;
    const bounceRate = websiteData ? websiteData.BounceRate : null;
    const pagesVisit = websiteData ? websiteData.PagePerVisit : null;
    const IndustryRank = websiteData ? websiteData.CategoryRank : null;
    const avgDuration = websiteData ? websiteData.AverageVisitDuration : null;
  

  function formatLargeNumber(number) {
    const suffixes = ["", "K", "M", "B", "T"];
    const scale = Math.floor(Math.log10(number) / 3);
    const scaledNumber = number / Math.pow(10, scale * 3);
    const formattedNumber = scaledNumber.toFixed(1);
    return formattedNumber + suffixes[scale];
  }

  const formattedWebVisits = formatLargeNumber(webVisits);
  const avgTime = avgDuration ? new Date(avgDuration).toISOString().substr(11, 8) : null;
  const WebName = websiteData ? websiteData.WebsiteName : null;
  const description = websiteData ? websiteData.Description : null;

  return (
    <>
      {isFetching && (
        <div className="dark:bg-gray-800 fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="dark:bg-transparent">
            <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
              <DotLoader color="#36d7b7" size={60} />
            </div>
          </div>
        </div>
      )}

{!isError && data && data.websiteData.length === 0 && (
  <div className="dark:bg-gray-800 text-white text-center py-4">
    <h2 className="text-2xl md:text-3xl font-semibold mb-2">
      The data you are looking for isn't available
    </h2>
    
  </div>
)}

      {!isFetching && websiteData && (
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
                      {formattedWebVisits ?? "Data not found"}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                  <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                    Global Rank
                  </h2>
                  <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                      {rank ?? "Data not found"}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                  <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                    Industry Rank
                  </h2>
                  <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                      {IndustryRank ?? "Data not found"}
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
                      {bounceRate ?? "Data not found"} %
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                  <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                    Average Time Duration
                  </h2>
                  <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                      {avgTime ?? "Data not found"}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                  <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                    Pages Per Visit
                  </h2>
                  <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                      {pagesVisit ?? "Data not found"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isError  && (
        <div className="text-red-500 text-center mt-4">
          Failed to fetch data: {isError}
        </div>
      )}
    </>
  );
};

export default TrafficSection;



