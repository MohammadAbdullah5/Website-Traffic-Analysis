import React, { useEffect, useState } from "react";


const TrafficSection = ({searchText}) => {
  const [rankData, setRankData] = useState(-99);
  const [visits, setVisits] = useState(-99);
  const [bounce, setBounce] = useState(-99);
  const [pagePerVisit, setpagePerVisit] = useState(-99);
  const [industryRank, setindustryRank] = useState(-99);
  const [averageDuration, setaverageDuration] = useState(-99);
  




  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const webURL = searchText;

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
  }, []);

  useEffect(() => {
    const fetchWebVisits = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/getWebsiteVisits?webURL=${webURL}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rank data");
        }
        const data = await response.json();

        setVisits(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWebVisits();
  }, []);

  useEffect(() => {
    const fetchBounceRate = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/getBounceRate?webURL=${webURL}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rank data");
        }
        const data = await response.json();

        setBounce(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBounceRate();
  }, []);

  useEffect(() => {
    const fetchPageVisits = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/getPagePerVisits?webURL=${webURL}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rank data");
        }
        const data = await response.json();

        setpagePerVisit(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPageVisits();
  }, []);


  useEffect(() => {
    const fetchIndustryRank = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/getIndustryRank?webURL=${webURL}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rank data");
        }
        const data = await response.json();

        setindustryRank(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchIndustryRank();
  }, []);

  useEffect(() => {
    const fetchAverageDuration = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/getAverageDuration?webURL=${webURL}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rank data");
        }
        const data = await response.json();

        setaverageDuration(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAverageDuration();
  }, []);

  




  const rank = rankData && rankData.length > 0 ? rankData[0].GlobalRank : null;
  const webVisits =visits && visits.length > 0 ? visits[0].WebsiteVisits : null;
  const bounceRate = bounce && bounce.length > 0 ? bounce[0].BounceRate : null;
  const pagesVisit =pagePerVisit && pagePerVisit.length > 0? pagePerVisit[0].PagePerVisit: null;
  const IndustryRank = industryRank && industryRank.length > 0? industryRank[0].CategoryRank: null;
  const avgDuration = averageDuration && averageDuration.length > 0? averageDuration[0].AverageVisitDuration: null;
  


  
  const date = new Date(avgDuration);


const hours = ('0' + date.getUTCHours()).slice(-2); // Ensure leading zero if needed
const minutes = ('0' + date.getUTCMinutes()).slice(-2);
const seconds = ('0' + date.getUTCSeconds()).slice(-2);

const avgTime = `${hours}:${minutes}:${seconds}`;



  console.log(rank);
  console.log(webVisits);
  console.log(bounceRate);
  console.log(pagesVisit);
  console.log(IndustryRank);
  console.log(avgTime);
  



  return (
    <>
      {/*Total visits and global rank*/}
      <section className="my-8 sm:my-5 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 px-6 sm:px-4">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 pt-6 px-6 sm:p-8 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">Total Visits</h4>
              <div className="my-4">
                <p>{webVisits}</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 pt-6 px-6 sm:p-8 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">Global Rank</h4>
              <div className="my-4">{rank}</div>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/*Bounce Rate and Pages per visit*/}
      <section className="my-8 sm:my-5 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 px-6 sm:px-4">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 pt-6 px-6 sm:p-8 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">Bounce Rate</h4>
              <div className="my-4">
                <p>{bounceRate} %</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 pt-6 px-6 sm:p-8 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">
                Pages per vists
              </h4>
              <div className="my-4">
                <p>{pagesVisit}</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/*Industry Rank and Average Duration*/}
      <section className="my-8 sm:my-5 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 px-6 sm:px-4">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 pt-6 px-6 sm:p-8 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">
                Industry Rank
              </h4>
              <div className="my-4">
                <p>{IndustryRank}</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 pt-6 px-6 sm:p-8 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">
                Average Duration
              </h4>
              <div className="my-4">
                <p>{avgTime}</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/*Device Distribution and Gender distribution*/}
      <section className="my-8 sm:my-5 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 px-6 sm:px-4">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 pt-6 px-6 sm:p-8 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">
                Device Distribution
              </h4>
              <div className="my-4">
                <div className="w-full overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      title="Home Task"
                      className="w-full h-full"
                      src="https://app.powerbi.com/reportEmbed?reportId=292f84ee-87c0-4585-9296-254f3035115f&autoAuth=true&ctid=1d7aa2e9-3a1a-4af4-9873-31cc6674969e&navContentPaneEnabled=false"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="fullscreen; accelerometer; gyroscope; magnetometer; vr"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 pt-6 px-6 sm:p-8 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">
                Gender Distribution{" "}
              </h4>
              <div className="my-4">
                <div className="w-full overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      title="Home Task"
                      className="w-full h-full"
                      src="https://app.powerbi.com/reportEmbed?reportId=292f84ee-87c0-4585-9296-254f3035115f&autoAuth=true&ctid=1d7aa2e9-3a1a-4af4-9873-31cc6674969e&navContentPaneEnabled=false"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="fullscreen; accelerometer; gyroscope; magnetometer; vr"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrafficSection;
