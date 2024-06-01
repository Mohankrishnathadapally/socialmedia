import express from "express";
import data from "./data.js";
import cors from "cors";

const app = express();

const PORT = 8000;
app.use(cors());

app.get("/", (req, res) => {
  res.json(data);
});
app.get("/about", (req, res) => {
  res.json("About page");
});

app.listen(PORT, () => {
  console.log("Listening at port" + PORT);
});