import express from "express";
import mongoose from "mongoose";
import { router } from "./router/url.js";

const app = express();
app.use(express.json());
app.use("/url", router);

mongoose
  .connect("mongodb://localhost:27017/url-shortner")
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});
