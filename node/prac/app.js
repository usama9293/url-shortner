import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json()); // Middleware for parsing JSON body

mongoose
  .connect("mongodb://127.0.0.1:27017/youtubeapp")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  const html = `
    <html>
        <head>
            <title>Users</title>
        </head>
        <body>
            <h1>Users</h1>
            <ul>
            ${allUsers
              .map(
                (user) =>
                  `<li>${user.firstName} ${user.lastName} and email ${user.email}</li>`
              )
              .join("")}
            </ul>
        </body>

   `;
  res.send(html);
});

app.post("/api/user", async (req, res) => {
  const { first_name, last_name, email, gender, job_title } = req.body;

  if (!first_name || !last_name || !email || !gender || !job_title) {
    return res.status(400).send("All fields are required");
  }

  try {
    const result = await User.create({
      firstName: first_name,
      lastName: last_name,
      email,
      jobTitle: job_title,
      gender,
    });
    console.log(result);
    return res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
