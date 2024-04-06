import express from "express";
import URL from "../model/url.js";
import { restrictTo } from "../middleware/auth.js";

const Router = express.Router();

Router.get("/", restrictTo(["NORMAL"]), async (req, res) => {
  const allurls = await URL.find({ createdby: req.user._id });
  res.render("index", {
    urls: allurls,
  });
});

Router.get("/signup", (req, res) => {
  return res.render("signup");
});
Router.get("/login", (req, res) => {
  return res.render("login");
});

export default Router;
