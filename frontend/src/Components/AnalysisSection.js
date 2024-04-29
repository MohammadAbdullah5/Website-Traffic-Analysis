import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WebsiteDescription from './WebsiteDescription';
import TrafficSection from './TrafficSection';
import VisistsSection from './VisistsSection';

const AnalysisSection = () => {
  return (
    <>
      <WebsiteDescription/>
      <TrafficSection/>
      <VisistsSection/>
    </>
  )
}

export default AnalysisSection
