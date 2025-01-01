



const express = require('express');  
const router = express.Router();  
const assignmentController = require('../controllers/assignmentController.cjs');  
  
router.get('/assignments', assignmentController.getAssignments);  
  
module.exports = router;


// Path: controllers/assignmentController.js