import express from "express";
import { getAnalytics, getURL } from "../controller/url.js";

const router = express.Router();

router.post("/", getURL);

router.get("/analytics", getAnalytics);

export default router;
