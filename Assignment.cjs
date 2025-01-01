


const mongoose = require('mongoose');  
  
const assignmentSchema = new mongoose.Schema({  
  name: String,  
  description: String,  
  dueDate: Date,  
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }  
});  
  
module.exports = mongoose.model('Assignment', assignmentSchema);


//  Path: models/Course.js