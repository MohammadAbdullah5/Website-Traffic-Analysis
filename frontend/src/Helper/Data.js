import React, { useEffect, useState } from "react";

export function GetRank({ webURL }) {
  const [rankData, setRankData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRankData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/getRank?webURL=${webURL}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rank data");
        }
        const data = await response.json();
        setRankData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchRankData();
  }, [webURL]);

  

  // Check if rankData exists and has at least one element before accessing its properties
  const rank = rankData && rankData.length > 0 ? rankData[0].GlobalRank : null;

  return rank;
}

