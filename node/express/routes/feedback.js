import express from "express";

const Router = express.Router();

export default (params) => {
  const { feedbackService } = params;

  Router.get("/", async (req, res) => {
    const feedbacks = await feedbackService.getList();
    res.json(feedbacks);
  });

  Router.post("/", (req, res) => {
    res.send(`Feedback form submitted`);
  });

  // Return the configured router instance
  return Router;
};
