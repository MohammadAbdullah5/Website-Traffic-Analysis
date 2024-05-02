const sql = require("mssql");
const config = require("../Database/Config");

exports.GetAllData = async (webURL, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
    console.log(webURL);
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

exports.GetAllWebsites = async (webURL, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
    console.log(webURL);
    const query = `
    SELECT WebsiteID , WebsiteName , WebsiteURL , (Select Value from Lookup where ID=WebsiteIndustry) as WebsiteIndustry , Description , WebsiteVisits , PagePerVisit , AverageVisitDuration , BounceRate , CategoryRank , GlobalRank 
    from Website where WebsiteURL=@webURL
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


exports.GetGenderData = async (webURL, res) => {
  try {
    const pool = await sql.connect(config); // Await the connection
    console.log(webURL);
    const query = `
    Select Count(*) as NumberodUsers , gender from UserDemographics join Users on Users.UserID=UserDemographics.UserID join Sessions on Sessions.UserID=Users.UserID join SessionPages on SessionPages.SessionID=Sessions.SessionID join Pages on Pages.PageID=SessionPages.PageID join Website on Website.WebsiteID=Pages.WebsiteID where WebsiteURL=@webURL group by UserDemographics.Gender
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