import React from "react";

const TrafficSection = () => {
  return (
    <>
      <section className="my-8 sm:my-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 p-6">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">
                Total Visists
              </h4>
              <div className="my-4">
                <p>Total number of vists of website</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">Global Rank</h4>
              <div className="my-4">
                <p>Rank of the website</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section className="my-8 sm:my-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 p-6">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">Global Rank</h4>
              <div className="my-4">
                <p>Total number of vists of website</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3 bg-gray-50">
            <div>
              <h4 className="font-bold text-2xl leading-tight">
                Gender Distribution{" "}
              </h4>
              <div className="my-4">
                <div className="w-full overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      title="Home Task"
                      className="w=full h=full"
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
