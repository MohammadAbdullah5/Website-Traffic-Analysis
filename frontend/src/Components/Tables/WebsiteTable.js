import React, { useEffect, useState } from "react";


const TrafficSection = () => {


  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/getWebsiteData`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  });

 
  const formatDuration = (duration) => {
    const date = new Date(duration);
    const hours = ("0" + date.getUTCHours()).slice(-2);
    const minutes = ("0" + date.getUTCMinutes()).slice(-2);
    const seconds = ("0" + date.getUTCSeconds()).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  };

  const formattedData = Array.isArray(data)
  ? data.map((item) => ({
      ...item,
      AverageVisitDuration: formatDuration(item.AverageVisitDuration),
    }))
  : [];


  console.log(formattedData);

  return (
    <div
      className="max-w-full mx-auto px-6 md:px-12 xl:px-6"
      style={{ overflowX: "hidden" }}
    >
      <div
        className="mb-10 space-y-4 px-6 md:px-0"
        style={{ overflowX: "hidden" }}
      >
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-10">
          Website Table
        </h2>
      </div>
      <div
        className="overflow-x-auto sm:-mx-6 lg:-mx-8"
        style={{ overflowX: "hidden" }}
      >
        <div
          className="inline-block min-w-full py-2 sm:px-6 lg:px-8"
          style={{ overflowX: "hidden" }}
        >
          <div className="overflow-hidden" style={{ overflowX: "hidden" }}>
            <div
              className="border rounded-lg border-white overflow-y-auto"
              style={{ maxHeight: "500px" }}
            >
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-5 py-4">
                      WebsiteName
                    </th>
                    <th scope="col" className="px-5 py-4">
                      WebsiteURL
                    </th>
                    <th scope="col" className="px-5 py-4">
                      WebsiteIndustry
                    </th>
                    <th scope="col" className="px-5 py-4">
                      WebsiteVisits
                    </th>
                    <th scope="col" className="px-5 py-4">
                      PagePerVisit
                    </th>
                    <th scope="col" className="px-5 py-4">
                      AverageVisitDuration
                    </th>
                    <th scope="col" className="px-5 py-4">
                      BounceRate
                    </th>
                    <th scope="col" className="px-5 py-4">
                      CategoryRank
                    </th>
                    <th scope="col" className="px-5 py-4">
                      GlobalRank
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {formattedData.map((website, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-6 py-4">
                        {website.WebsiteName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {website.WebsiteURL}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {website.WebsiteIndustry}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {website.WebsiteVisits}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {website.PagePerVisit}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {website.AverageVisitDuration}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {website.BounceRate}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {website.CategoryRank}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {website.GlobalRank}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficSection;
