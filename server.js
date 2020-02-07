const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

app.set("port", PORT);

app.use(express.static(path.join(__dirname,"build")));

app.get("/webpage", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")))

app.get("/testingroute", (req, res) => res.send("Todo ok"));

app.listen(app.get("port"), err => {
  if(err) {
    console.log("error running app", err);
    return;
  }
  console.log("App listening on port ", app.get("port"));
});