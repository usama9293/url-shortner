import mongoose from "mongoose";

async function connect(url) {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.error("Database connection error:", error);
    });
}

export default connect;
