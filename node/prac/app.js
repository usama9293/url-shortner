import express, { Router } from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";
import connect from "./view/connection.js";

const app = express();
connect("mongodb://127.0.0.1:27017/youtubeapp");
app.use(express.json()); // Middleware for parsing JSON body

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
