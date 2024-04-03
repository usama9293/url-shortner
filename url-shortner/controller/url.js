import shortid from "shortid";
import { URL } from "../models/url";

async function getURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).send({ message: "URL is required" });
  }

  const shortId = shortid(8);
  await URL.create({ shortId, fullUrl: req.body.url, clicks: [] });
  return res.status(201).send({ shortId });
}

export { getURL };
