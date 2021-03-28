const Bootcamp = require("../models/Bootcamp");
/*
    @desc   Get all bootcamps
    @route  GET /api/v1/bootcamps
    @access Public
*/
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps." });
};

/*
    @desc   Get single bootcamp
    @route  GET /api/v1/bootcamps/:id
    @access Public
*/
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) res.status(400).json({ success: false });

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

/*
    @desc   Create new bootcamp
    @route  POST /api/v1/bootcamps/:id
    @access Public
*/
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

/*
    @desc   Update bootcamp
    @route  PUT /api/v1/bootcamps/:id
    @access Public
*/
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}.` });
};
/*
    @desc   Remove bootcamp
    @route  DELETE /api/v1/bootcamps/:id
    @access Public
*/
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}.` });
};
