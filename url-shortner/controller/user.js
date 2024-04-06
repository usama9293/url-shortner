import User from "../model/user.js";
import { setUser } from "../service/auth.js";

async function handleUser(req, res) {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  res.render("index");
}
async function handleUserlogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.render("login", { error: "Invalid email or password" });
  }

  const token = setUser(user);

  res.cookie("token", token);

  res.redirect("/");
}
export { handleUser, handleUserlogin };
