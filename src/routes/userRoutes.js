const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware');
const router = express.Router(); 

// Admin accessible route
router.get('/admin', verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({meassage: "Welcome Admin"});
});

// admin and manager
router.get('/manager', verifyToken,authorizeRoles("manager", "admin") ,(req, res) => {
    res.json({meassage: "Welcome Manager"});
});

// For everyone
router.get('/user',verifyToken, authorizeRoles("Users", "admin", "manager"), (req, res) => {
    res.json({meassage: "Welcome Users"});
});

module.exports = router;