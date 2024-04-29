import express from "express";
import sql from "mssql";



const app = express();
app.use(express.json());


const config = {
  user: "test4",
  password: "123",
  server: "DESKTOP-441OPHG",
  database: "WebTrafficAnalysis",
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: false,
  },
  port: 1433,
};


app.get('/api/getRanks' , async (req , res) =>{
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query("Select TOP 3 WebsiteName , GlobalRank from Website order by GlobalRank");
    res.json(result.recordset);
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})




const PORT = 3000;

app.listen(PORT, () => {
  console.log("App is listening on port " + PORT);
});