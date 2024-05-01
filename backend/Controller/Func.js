const sql = require("mssql");
const config = require("../Database/Config")

exports.GetRank = async (webURL, res) => {


  try {
    const pool = await sql.connect(config); // Await the connection
    console.log(webURL)
    const query = `
      SELECT GlobalRank 
      FROM Website 
      WHERE WebsiteURL = @webURL 
    `;

    const result = await pool.request()
      .input('webURL', sql.VarChar, webURL)
      .query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}



exports.GetWebsitesVisits = async (webURL,res) =>{
  try {
    const pool = await sql.connect(config); // Await the connection

    const query = `
      SELECT WebsiteVisits 
      FROM Website 
      WHERE WebsiteURL = @webURL 
      
    `;

    const result = await pool.request()
      .input('webURL', sql.VarChar, webURL)
      .query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}


exports.GetBounceRate = async (webURL,res) =>{
  try {
    const pool = await sql.connect(config); // Await the connection

    const query = `
      SELECT BounceRate 
      FROM Website 
      WHERE WebsiteURL = @webURL 
      
    `;

    const result = await pool.request()
      .input('webURL', sql.VarChar, webURL)
      .query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}


exports.GetPagesPerVisit = async (webURL,res) =>{
  try {
    const pool = await sql.connect(config); // Await the connection

    const query = `
      SELECT PagePerVisit 
      FROM Website 
      WHERE WebsiteURL = @webURL 
      
    `;

    const result = await pool.request()
      .input('webURL', sql.VarChar, webURL)
      .query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}



exports.GetIndustryRank = async (webURL,res) =>{
  try {
    const pool = await sql.connect(config); // Await the connection

    const query = `
      SELECT CategoryRank 
      FROM Website 
      WHERE WebsiteURL = @webURL 
      
    `;

    const result = await pool.request()
      .input('webURL', sql.VarChar, webURL)
      .query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}


exports.GetAverageDuration = async (webURL,res) =>{
  try {
    const pool = await sql.connect(config); // Await the connection

    const query = `
      SELECT AverageVisitDuration 
      FROM Website 
      WHERE WebsiteURL = @webURL 
      
    `;

    const result = await pool.request()
      .input('webURL', sql.VarChar, webURL)
      .query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}


exports.GetName = async (webURL,res) =>{
  try {
    const pool = await sql.connect(config); // Await the connection

    const query = `
      SELECT WebsiteName 
      FROM Website 
      WHERE WebsiteURL = @webURL 
      
    `;

    const result = await pool.request()
      .input('webURL', sql.VarChar, webURL)
      .query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}


exports.GetDescription = async (webURL,res) =>{
  try {
    const pool = await sql.connect(config); // Await the connection

    const query = `
      SELECT Description 
      FROM Website 
      WHERE WebsiteURL = @webURL 
      
    `;

    const result = await pool.request()
      .input('webURL', sql.VarChar, webURL)
      .query(query);

    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}