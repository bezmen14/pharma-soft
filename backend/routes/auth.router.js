require('dotenv').config()
const Router = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const router = new Router();

const secretKey = process.env.SECRETKEY;

router.post('/registration',
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 3 and shorter than 12').isLength({ min: 3, max: 12 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Uncorrect request', errors });
      }

      const { name, email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: `User with email ${email} already exists` });
      }
      const hashPassword = await bcrypt.hash(password, 10)
      const user = new User({
        name,
        email,
        password: hashPassword,
      });
      await user.save();
      const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

      return res.json({
        message: 'User was created',
        token,
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
        }
      });
    } catch (e) {
      console.log(e);
      res.send({ message: 'Server error' });
    }
  });

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(404).json({ message: 'All fields must be filled' });
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

    return res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      }
    });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
});

module.exports = router;
