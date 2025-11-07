const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

// Register
router.post('/register', async (req,res)=>{
  try{
    const { name, email, password } = req.body
    if(!email || !password) return res.status(400).json({ error: 'Missing fields' })
    const exists = await User.findOne({ email })
    if(exists) return res.status(400).json({ error: 'User exists' })
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await User.create({ name, email, passwordHash: hash })
    res.json({ id: user._id, email: user.email })
  }catch(err){ console.error(err); res.status(500).json({ error: 'Server' }) }
})

// Login
router.post('/login', async (req,res)=>{
  try{
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if(!user) return res.status(400).json({ error: 'Invalid credentials' })
    const ok = await bcrypt.compare(password, user.passwordHash)
    if(!ok) return res.status(400).json({ error: 'Invalid credentials' })
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' })
    res.json({ token })
  }catch(err){ console.error(err); res.status(500).json({ error: 'Server' }) }
})

module.exports = router
