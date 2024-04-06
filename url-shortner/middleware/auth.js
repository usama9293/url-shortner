import { getUser } from "../service/auth.js"; // Import getUser function from auth service

function handleforAuth(req, res, next) {
  const tokencookie = req.cookies?.token; // Use lowercase "authorization" header
  if (!tokencookie) {
    return next(); // Move to the next middleware if authorization header is missing or not in expected format
  }

  const token = tokencookie; // Extract the token from the header
  const user = getUser(token); // Call getUser function to get user details from token
  req.user = user; // Set the user details in the request object for future use
  next(); // Move to the next middleware
}

function restrictTo(roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.redirect("/login"); // Redirect to login page if user is not authenticated
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "You do not have permission" }); // Return forbidden error if user role is not allowed
    }
    next(); // Move to the next middleware
  };
}

export { handleforAuth, restrictTo };
