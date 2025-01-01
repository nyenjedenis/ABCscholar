



const Assignment = require('../models/Assignment.cjs');  
  
exports.getAssignments = async (req, res) => {  
  const assignments = await Assignment.find();  
  res.json(assignments);  
};


//  Path: controllers/courseController.js