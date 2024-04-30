const sql = require("mssql");
const config = require("../Database/Config")

exports.GetTop3Ranks  =   async (req,res) =>{
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query("Select TOP 3 WebsiteName , GlobalRank from Website order by GlobalRank");
        res.json(result.recordset);
      } catch (error) {
        console.error("SQL Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }

}