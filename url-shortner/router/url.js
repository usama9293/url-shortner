import express from "express";
import { getURL } from "../controller/url.js";

const router = express.Router();

router.get("/", getURL);

export { router };
