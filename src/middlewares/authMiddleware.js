const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader&& authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
    }

    if(!token){
        return res.status(401).json({ message : "Token not found" });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log(decoded);
        next();
    }
    catch(err){
        res.status(401).json({ message : "Invalid token" });
    }
}

module.exports = verifyToken;