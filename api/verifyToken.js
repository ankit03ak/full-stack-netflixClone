const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token; 

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access Denied! No token provided." });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Token is not valid!" });

    req.user = user; 
    next(); 
  });
}

module.exports = verify;
