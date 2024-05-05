import React from 'react'

const DemographicSection = () => {
  return (
    <>
      <div className="flex justify-center items-start pt-8">
        <div className="w-full sm:w-3/4 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col justify-center ml-4">
            <h4 className="font-bold text-2xl">Views Per Conutry</h4>
            <br/>
          </div>
          <div className="flex justify-center"> {/* Centering the iframe */}
            <iframe
              title="Home Task"
              className="w-full sm:max-w-full" // Set width to full on small screens and max-width to full on larger screens
              height="400" // Set a fixed height or adjust as needed
              src="https://app.powerbi.com/reportEmbed?reportId=292f84ee-87c0-4585-9296-254f3035115f&autoAuth=true&ctid=1d7aa2e9-3a1a-4af4-9873-31cc6674969e&navContentPaneEnabled=false"
              frameBorder="0"
              allowFullScreen={true}
              allow="fullscreen; accelerometer; gyroscope; magnetometer; vr"
            ></iframe>
          </div>
          <p className="text-center">This is the number of views per conutry</p> 
        </div>
      </div>
    </>
  )
}

export default DemographicSection
