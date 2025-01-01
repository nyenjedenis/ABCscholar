


const Course = require('../models/Course.cjs');  
  
exports.getCourses = async (req, res) => {  
  const courses = await Course.find().populate('assignments');  
  res.json(courses);  
};


//  Path: controllers/courseController.js