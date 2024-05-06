import React from "react";
import WebsiteDescription from "./WebsiteDescription";
import TrafficSection from "./TrafficSection";
import { DotLoader } from "react-spinners";
import Tables from "./Tables";



const AnalysisSection = ({ searchText }) => {
  return (
    <>
      <div className="dark:bg-gray-800">
        <div className="dark:bg-transparent">
          
        
          <TrafficSection searchText={searchText} />
          <Tables searchText={searchText}/>
          
          
          
        </div>
      </div>
    </>
  );
};

export default AnalysisSection;
