import express from "express";

const Router = express.Router();

export default (params) => {
  const { speakerService } = params;

  Router.get("/", async (req, res) => {
    const allSpeakers = await speakerService.getList();
    res.json(allSpeakers);
  });

  Router.get("/:shortname", (req, res) => {
    res.send(`Detail page of ${req.params.shortname}`);
  });

  // Return the configured router instance
  return Router;
};
