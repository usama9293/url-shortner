import express from "express";
import users from "./MOCK_DATA.json" assert { type: "json" };
import fs from "fs";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse incoming request bodies in JSON format

app.get("/user", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
  res.send(html);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  })
  .delete((req, res) => {
    res.send("Received a DELETE HTTP method");
  })
  .patch((req, res) => {
    res.send("Received a PATCH HTTP method");
  });

app.post("/api/users", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.json({ message: "User added", id: users.length });
  });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
