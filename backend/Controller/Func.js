const sql = require("mssql");
const config = require("../Database/Config");

exports.GetAllData = async (req, res) => {
  try {
    const {webname} = req.params;
    console.log('Received web parameter:', webname);
    const pool = await sql.connect(config); // Await the connection
    const responseData = {};

    // Query to fetch Website data based on webURL
    const websiteQuery = `
      SELECT WebsiteName, WebsiteURL , WebsiteIndustry, Description, WebsiteVisits, PagePerVisit, AverageVisitDuration, BounceRate, CategoryRank, GlobalRank 
      FROM Website 
      WHERE WebsiteName = @webname
    `;

    const websiteResult = await pool.request()
                                     .input("webname", sql.NVarChar, webname)
                                     .query(websiteQuery);

    

    // Query to fetch all data from another table (replace this with your actual query)
    const referrerQuery = `Select ReferrerName , (Select WebsiteName from Website where WebsiteID=Referrers.WebsiteID) as WebsiteName ,  ReferrerURL , ReferrerType , Description , ReferrerViews ,TrafficCount from Referrers where WebsiteID=(Select WebsiteID FROM Website where WebsiteName = @webname)`;
    const pagesQuery = `Select (Select WebsiteName from Website where Website.WebsiteID=Pages.WebsiteID) as Website , PageName , PageType  , PageView  , Time_Spent from Pages where WebsiteID=(Select WebsiteID FROM Website where WebsiteName = @webname)`;
    const pageSectionQuery = `SELECT (SELECT PageName FROM Pages WHERE PageSection.PageId = Pages.PageID) AS PageName, Time_Span, SectionCategory FROM PageSection WHERE PageSection.PageId IN (SELECT PageID FROM Pages WHERE WebsiteID IN (SELECT WebsiteID FROM Website WHERE WebsiteName = @webname));`;
    const eventsQuery = `Select Website.WebsiteName , Pages.PageName , PageSection.SectionCategory , EventTime , EventType from Events join PageSection on PageSection.PageSectionID=Events.PageSectionID join Pages on Pages.PageID = PageSection.PageID join Website on Website.WebsiteID=Pages.WebsiteID WHERE Website.WebsiteName = @webname`
    const sessionPagesQuery = `SELECT PageName, WebsiteName FROM SessionPage SP JOIN Pages P ON SP.PageID = P.PageID JOIN Website W ON W.WebsiteID = P.WebsiteID where W.WebsiteName = @webname`
    const sessionQuery = `SELECT CONCAT(FirstName, ' ', LastName) AS UserName, StartTime, EndTime, IPAddress, Device, Browser, Date FROM Session JOIN Users ON Users.UserID = Session.UserID WHERE Users.UserID IN (SELECT UserID FROM Session WHERE SessionID IN (SELECT SessionID FROM SessionPage WHERE PageID IN (SELECT PageID FROM Pages WHERE WebsiteID IN (SELECT WebsiteID FROM Website WHERE WebsiteName = @webname))));`
    const usersQuery = `SELECT FirstName, LastName, Email, RegistrationDate, LastLoginDate, City, Country, Gender, Age, AgeCategory FROM Users WHERE UserID IN (SELECT UserID FROM Session WHERE SessionID IN (SELECT SessionID FROM SessionPage WHERE PageID IN (SELECT PageID FROM Pages WHERE WebsiteID IN (SELECT WebsiteID FROM Website WHERE WebsiteName = @webname))));`

    const referrerData = await pool.request().input("webname", sql.VarChar, webname).query(referrerQuery);
    const pagesData = await pool.request().input("webname", sql.VarChar, webname).query(pagesQuery);
    const pageSectionData = await pool.request().input("webname", sql.VarChar, webname).query(pageSectionQuery);
    const eventsData = await pool.request().input("webname", sql.VarChar, webname).query(eventsQuery);
    const sessionPagesData = await pool.request().input("webname", sql.VarChar, webname).query(sessionPagesQuery);
    const sessionData = await pool.request().input("webname", sql.VarChar, webname).query(sessionQuery);
    const usersData = await pool.request().input("webname", sql.VarChar, webname).query(usersQuery);




    responseData.websiteData = websiteResult.recordset;
    responseData.referrer = referrerData.recordset;
    responseData.pages = pagesData.recordset;
    responseData.pageSection = pageSectionData.recordset;
    responseData.events = eventsData.recordset;
    responseData.sessionPages = sessionPagesData.recordset;
    responseData.sessions= sessionData.recordset;
    responseData.users= usersData.recordset;







    res.json(responseData);
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
    Select Count(*) as NumberodUsers , gender from UserDemographics join Users on Users.UserID=UserDemographics.UserID join Sessions on Sessions.UserID=Users.UserID join SessionPages on SessionPages.SessionID=Sessions.SessionID join Pages on Pages.PageID=SessionPages.PageID join Website on Website.WebsiteID=Pages.WebsiteID where WebsiteName = @webname group by UserDemographics.Gender
    `;

    const result = await pool.request().query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
