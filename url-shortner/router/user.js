import express from "express";
import { handleUser, handleUserlogin } from "../controller/user.js";

const router = express.Router();

router.post("/", handleUser);
router.post("/login", handleUserlogin);

export default router;
