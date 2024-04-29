import React from "react";

const VisitsSection = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-start p-8">
        <div className="w-3/4 h-96 bg-white shadow-lg rounded-lg">
          <div>
            <h4 className="font-bold text-2xl leading-tight mt-1">Total Visists</h4>
          </div>
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
    </>
  );
};

export default VisitsSection;
