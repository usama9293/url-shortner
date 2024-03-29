import express from "express";

const Router = express.Router();

Router.get("/user", async (req, res) => {
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

Router.get("/api/user", async (req, res) => {
  const allUsers = await User.find({});
  return res.status(200).send(allUsers);
});

Router.get("/api/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await user.findById(id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  return res.status(200).send(user);
});

Router.post("/api/user", async (req, res) => {
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

export default Router;
