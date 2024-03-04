const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Athentication Failed: Invalid token" });
    }
    try {
        const tokenData = token.split(" ")[1];
        const decoded = jwt.verify(tokenData, process.env.SECRET_KEY);
        req.userId = decoded._id;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = authenticate;