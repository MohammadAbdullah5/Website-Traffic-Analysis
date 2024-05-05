import React, { useEffect, useState } from "react";

const WebsiteDescription = ({searchText}) => {

  const webURL = searchText;

  const [Data, setData] = useState(-99);


  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/getData?webURL=${webURL}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rank data");
        }
        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDescription();
  }, []);




  const WebName = Data && Data.length > 0? Data[0].WebsiteName: null;
  const description = Data && Data.length > 0? Data[0].Description: null;

  console.log(WebName);
  console.log(description);





  return (
    <>
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
    </>
  );
};

export default WebsiteDescription;
