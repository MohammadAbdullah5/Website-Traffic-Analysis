import React, { useEffect, useState } from "react";

const WebsiteDescription = ({searchText}) => {

  const webURL = searchText;

  const [name, setname] = useState(-99);
  const [decs, setdesc] = useState(-99);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/getName?webURL=${webURL}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rank data");
        }
        const data = await response.json();

        setname(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchName();
  }, []);

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/getDescription?webURL=${webURL}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rank data");
        }
        const data = await response.json();

        setdesc(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDescription();
  }, []);




  const WebName = name && name.length > 0? name[0].WebsiteName: null;
  const description = decs && decs.length > 0? decs[0].Description: null;

  console.log(WebName);
  console.log(description);





  return (
    <>
      <div class="max-w-3xl mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl pt-10 px-4 lg:px-8 rounded-sm">
        <div class="md:flex bg-gradient-to-br from-blue-700 to-purple-400 text-white rounded-xl">
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm font-bold">
             {WebName}
            </div>
            <p class="mt-2">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteDescription;
