import shortid from "shortid";
import URL from "../model/url.js";

async function getURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).send({ message: "URL is required" });
  }

  const shortId = shortid(8);
  await URL.create({
    shortUrl: shortId,
    fullUrl: req.body.url,
    clicks: [],
    createdby: req.user._id,
  });
  const shortenedUrl = `http://localhost:3000/${shortId}`; // Modify the URL format as needed
  return res.status(201).render("index", { shortenedUrl });
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.clicks.length,
    analytics: result.clicks,
  });
}

export { getURL, getAnalytics };
