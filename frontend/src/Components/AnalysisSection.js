import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WebsiteDescription from "./WebsiteDescription";
import TrafficSection from "./TrafficSection";
import VisistsSection from "./VisistsSection";
import DemographicSection from "./DemographicSection";
import UsersByAgeSection from "./UsersByAgeSection";

const AnalysisSection = ( {searchText} ) => {
  return (
    <>
      <div class="dark:bg-gray-800">
        <div class="dark:bg-transparent">
          <WebsiteDescription searchText={searchText} />
          <TrafficSection searchText={searchText} />
          <VisistsSection />
          <DemographicSection/>
          <UsersByAgeSection/>
          
        </div>
      </div>
    </>
  );
};

export default AnalysisSection;
