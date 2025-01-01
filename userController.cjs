


const User = require('../models/User');  
  
exports.register = async (req, res) => {  
  const { username, password } = req.body;  
  const hashedPassword = await bcrypt.hash(password, 10);  
  const user = new User({ username, password: hashedPassword });  
  try {  
   await user.save();  
   res.json({ success: true });  
  } catch (error) {  
   res.json({ success: false });  
  }  
};  
  
exports.login = async (req, res) => {  
  const { username, password } = req.body;  
  const user = await User.findOne({ username });  
  if (!user) {  
   return res.json({ success: false });  
  }  
  const isValidPassword = await bcrypt.compare(password, user.password);  
  if (!isValidPassword) {  
   return res.json({ success: false });  
  }  
  const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });  
  res.json({ success: true, token });  
};


//  Path: controllers/courseController.js