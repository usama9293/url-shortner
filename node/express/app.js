import Express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import Router from "./routes/index.js";

import speakerservice from "./services/speakerservis.js";
import feedbackservice from "./services/feedbackservis.js";

const feedbackService = new feedbackservice("./data/feedback.json");
const speakerService = new speakerservice("./data/speakers.json");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = Express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(Express.static(path.join(__dirname, "./static")));
app.use("/", Router({ feedbackService, speakerService }));

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
