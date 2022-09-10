const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: err.message });
    }

    if (decoded.data.role != "admin") {
      return res.status(401).json({
        message: "unauthorized action",
      });
    }

    req.user = decoded;
    return next();
  });
};
