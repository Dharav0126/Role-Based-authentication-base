const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req,res) => {
    console.log("register called");
    
  const { name, password, role } = req.body;
  const hashedPassword = await bcrypt.hashSync(password, 10);

  const newUser = new User({
    name,
    password: hashedPassword,
    role,
  });
  await newUser.save();
  res.status(201).json({ message: 'User created successfully' });
};

const login = async (req, res) => {//
    
    console.log("login called");
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ name });
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    console.log(token);
    res.status(200).json({message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
    register,
    login
};