function isAdmin(request, response, next) {
  if (!request.user) {
    return response.status(401).json({ message: "Authentication required" });
  }

  if (request.user.role !== "admin") {
    return response
      .status(403)
      .json({ message: "Access denied. Admin privileges required." });
  }

  next();
}

module.exports = isAdmin;
