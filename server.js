const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.set("port", PORT);

app.get("/", (req, res) => res.send("ok"));

app.listen(app.get("port"), err => {
  if(err) {
    console.log("error running app", err);
    return;
  }
  console.log("App listening on port ", app.get("port"));
});