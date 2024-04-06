import express from "express";
import mongoose from "mongoose";
import router from "./router/url.js";
import URL from "./model/url.js";
import path from "path";
import staticRouter from "./router/staticRouter.js";
import userRouter from "./router/user.js";
import cookieParser from "cookie-parser";
import { handleforAuth, restrictTo } from "./middleware/auth.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(cookieParser());

app.use(express.json()); // Ensure express.json() middleware is used before defining routes
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(handleforAuth);

app.use("/url", restrictTo(["NORMAL"]), router);
app.use("/user", userRouter);
app.use("/", staticRouter);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/url-shortner")
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
  });

app.get("/:shortUrl", async (req, res) => {
  const url = await URL.findOne({ shortUrl: req.params.shortUrl });
  if (url) {
    url.clicks.push({ timestamp: Date.now() });
    await url.save(); // Make sure to await the save operation
    return res.redirect(url.fullUrl);
  } else {
    res.status(404).send("URL not found");
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});
