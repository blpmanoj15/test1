const express=require("express");
const app = express();
const port=8000;

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});
app.get("/about", (req, res) => {
  res.status(200).send("About page");
});
app.listen(port,() => {
  console.log(`Example app listening at http://localhost:${port}`);
});
