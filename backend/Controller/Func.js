const sql = require("mssql");
const config = require("../Database/Config");

exports.GetAllData = async (webURL, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
   
    const query = `
      SELECT WebsiteName , Description , WebsiteVisits , PagePerVisit , AverageVisitDuration , BounceRate , CategoryRank , GlobalRank 
      FROM Website 
      WHERE WebsiteURL = @webURL 
    `;

    const result = await pool
      .request()
      .input("webURL", sql.VarChar, webURL)
      .query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetAllWebsites = async (req, res) => {
  try {
    const pool = await sql.connect(config);

    const query = `
    SELECT WebsiteID , WebsiteName , WebsiteURL , WebsiteIndustry  , Description , WebsiteVisits , PagePerVisit , AverageVisitDuration , BounceRate , CategoryRank , GlobalRank 
    from Website
    `;

    const result = await pool
      .request()
      .query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetReferrerData = async (req, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
    const query = `
    Select ReferrerName , (Select WebsiteName from Website where WebsiteID=Referrers.WebsiteID) as WebsiteName ,  ReferrerURL , ReferrerType , Description , ReferrerViews ,TrafficCount from Referrers 
    `;

    const result = await pool.request().query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.GetPagesData = async (req, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
    const query = `
    Select (Select WebsiteName from Website where Website.WebsiteID=Pages.WebsiteID) as Website , PageName , PageType  , PageView  , Time_Spent from Pages
    `;

    const result = await pool.request().query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetPageSectionData = async (req, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
    const query = `
    Select (Select PageName from Pages where PageSection.PageId=Pages.PageID)as PageName , Time_Span , SectionCategory from PageSection
    `;

    const result = await pool.request().query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetEventData = async (req, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
    const query = `
    Select Website.WebsiteName , Pages.PageName , PageSection.SectionCategory , EventTime , EventType from Events join PageSection on PageSection.PageSectionID=Events.PageSectionID join Pages on Pages.PageID = PageSection.PageID join Website on Website.WebsiteID=Pages.WebsiteID 
    `;

    const result = await pool.request().query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetSessionPageData = async (req, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
    const query = `
    SELECT PageName, WebsiteName FROM SessionPage SP JOIN Pages P ON SP.PageID = P.PageID JOIN Website W ON W.WebsiteID = P.WebsiteID
    `;

    const result = await pool.request().query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetSessionsData = async (req, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
    const query = `
    Select  CONCAT(FirstName , ' ' , LastName) as UserName , StartTime , EndTime , IPAddress , Device , Browser , Date from Session join Users on Users.UserID=Session.UserID
    `;

    const result = await pool.request().query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.GetUserData = async (req, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
    const query = `
    Select FirstName , LastName , Email , RegistrationDate, LastLoginDate , City , Country , Gender , Age , AgeCategory from Users
    `;

    const result = await pool.request().query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};








exports.GetGenderData = async (req, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
   
    const query = `
    Select Count(*) as NumberodUsers , gender from UserDemographics join Users on Users.UserID=UserDemographics.UserID join Sessions on Sessions.UserID=Users.UserID join SessionPages on SessionPages.SessionID=Sessions.SessionID join Pages on Pages.PageID=SessionPages.PageID join Website on Website.WebsiteID=Pages.WebsiteID where WebsiteURL=@webURL group by UserDemographics.Gender
    `;

    const result = await pool.request().query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
