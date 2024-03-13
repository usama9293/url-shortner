import express from "express";
import speakerRoute from "./speakers.js";
import feedbackRoute from "./feedback.js";

const Router = express.Router();

export default (params) => {
  Router.get("/", (_, res) => {
    res.render("index", {
      pageTitle: "Home",
    });
  });

  Router.use("/speakers", speakerRoute(params));
  Router.use("/feedback", feedbackRoute(params));

  // Return the configured router instance
  return Router;
};
