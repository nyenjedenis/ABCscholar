


const express = require('express');  
const router = express.Router();  
const courseController = require('../controllers/courseController.cjs');  
  
router.get('/courses', courseController.getCourses);  
  
module.exports = router;


//  Path: controllers/courseController.js