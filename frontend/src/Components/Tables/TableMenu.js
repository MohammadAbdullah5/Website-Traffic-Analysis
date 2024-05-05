import React from "react";
import { Link } from "react-router-dom";
import WebsiteTable from "./WebsiteTable";
import ReferrerTable from "./ReferrerTable";
import PagesTable from "./PagesTable";

const TableMenu = () => {
  return (
    <Link to="/tables">
    <div class="dark:bg-gray-800">
      <div class="dark:bg-transparent">

        <WebsiteTable/>
        <ReferrerTable/>
        <PagesTable/>

      </div>
    </div>
    </Link>
  );
};

export default TableMenu;
