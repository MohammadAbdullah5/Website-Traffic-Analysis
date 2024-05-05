import React from "react";
import { Link } from "react-router-dom";
import WebsiteTable from "./WebsiteTable";
import ReferrerTable from "./ReferrerTable";
import PagesTable from "./PagesTable";
import PageSection from "./PageSection";
import EventsTable from "./EventsTable";
import SessionPageTable from "./SessionPageTable";
import SessionsTable from "./SessionsTable";
import UserTable from "./UserTable";

const TableMenu = () => {
  return (
    <Link to="/tables">
      <div className="dark:bg-gray-800">
        <div className="dark:bg-transparent">
          <WebsiteTable />
          <ReferrerTable />
          <PagesTable />
          <PageSection />
          <EventsTable />
          <SessionsTable />
          <SessionPageTable />
          <UserTable />
        </div>
      </div>
    </Link>
  );
};

export default TableMenu;
