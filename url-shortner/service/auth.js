import Jwt from "jsonwebtoken";

const secret = "mysecretkey";

function setUser(user) {
  return Jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    secret
  );
}

function getUser(id) {
  // code to get user
  if (!id) {
    return null;
  }
  try {
    return Jwt.verify(id, secret);
  } catch (err) {
    return null;
  }
}

export { setUser, getUser };
