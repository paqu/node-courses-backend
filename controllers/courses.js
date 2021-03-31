const Course = require("../models/Course");
const asyncHandler = require("../middleware/async");
/*
    @desc   Get all courses
    @route  GET /api/v1/courses
    @access Public
*/
exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;

  console.log("xx:" + req.params.bootcampId);

  if (req.params.bootcampId) {
    query = Course.find({ bootcamp: req.params.bootcampId });
  } else {
    console.log("hello");
    query = Course.find();
  }

  const courses = await query;

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  });
});
