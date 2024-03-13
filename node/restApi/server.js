import Express from "express";
import fs from "fs";
import data from "./MOCK_DATA.json" assert { type: "json" };

const app = Express();

app.use(Express.urlencoded({ extended: true }));

app.get("/user", (req, res) => {
  const html = `
  <ul>
  ${data.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  
  `;
  res.send(html);
});

app
  .route("/api/user/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = data.find((user) => user.id === id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  })
  .delete((req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const userIndex = data.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    try {
      data.splice(userIndex, 1);
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal server error" });
        }
        return res.json({ message: "User deleted" });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  })
  .patch((req, res) => {
    //complete patch

    const id = Number(req.params.id);
    const userIndex = data.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = data[userIndex];
    const newUser = req.body;
    data[userIndex] = { ...user, ...newUser };
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
      }
      return res.json({ message: "User updated" });
    });
  });

app.post("/api/user", (req, res) => {
  const user = req.body;
  data.push({ ...user, id: data.length });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.json({ message: "User added", id: data.length });
  });
});

app.get("/api/user", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
