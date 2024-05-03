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
    SELECT WebsiteID , WebsiteName , WebsiteURL , (Select Value from Lookup where ID=WebsiteIndustry) as WebsiteIndustry , Description , WebsiteVisits , PagePerVisit , AverageVisitDuration , BounceRate , CategoryRank , GlobalRank 
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
    Select ReferrerName , (Select WebsiteName from Website where WebsiteID=Referrers.WebsiteID) as WebsiteName , (Select Value from Lookup where Referrers.ReferrerType=Lookup.ID)as ReferrerType , ReferrerURL,ReferralVisits,TrafficCount from Referrers 
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
    Select (Select WebsiteName from Website where Website.WebsiteID=Pages.WebsiteID) as Website , PageName , (Select Value from Lookup where Lookup.ID=Pages.PageType) as PageType , PageViews  , TimeSpent from Pages
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
    Select (Select WebsiteName from Website where Website.WebsiteID=Pages.WebsiteID) as Website , PageName , (Select Value from Lookup where Lookup.ID=Pages.PageType) as PageType , PageViews  , TimeSpent from Pages
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
