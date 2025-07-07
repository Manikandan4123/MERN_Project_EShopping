const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./UserModel');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/eShoppingUsers', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));




// 🔐 Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({ message: 'User not found. Please sign up.' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  res.json({ message: 'Login successful', username: user.username });
});



// 📝 Signup Route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const newUser = new User({ username, password });
  await newUser.save();

  res.json({ message: 'Account created successfully' });
});


// ✅ Start Server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
