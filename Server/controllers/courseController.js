//courseCOntroller.js
import Course from "../models/Course.js";
import path from "path"; // Import path for file operations
import fs from "fs"; // Import fs for file system operations

// @desc    Create a new course
// @route   POST /api/courses
// @access  Admin
export const createCourse = async (req, res) => {
  try {
    // When using multer for file uploads, req.body contains text fields
    // and req.file contains the uploaded file info.
    const { name, category, instructor, description, lectures } = req.body;
    
    // lectures come as stringified JSON from frontend, parse it
    const parsedLectures = lectures ? JSON.parse(lectures) : [];

    const thumbnailPath = req.file ? `/uploads/${req.file.filename}` : ""; // Get path from multer

    const newCourse = new Course({
      name,
      category,
      instructor,
      description,
      thumbnail: thumbnailPath, // Use the path from multer
      lectures: parsedLectures,
    });

    const createdCourse = await newCourse.save();
    res.status(201).json(createdCourse);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Get single course by ID
// @route   GET /api/courses/:id
// @access  Public
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Admin
export const updateCourse = async (req, res) => {
  try {
    const { name, category, instructor, description, lectures } = req.body;
    
    // lectures come as stringified JSON from frontend, parse it
    const parsedLectures = lectures ? JSON.parse(lectures) : [];

    const thumbnailPath = req.file ? `/uploads/${req.file.filename}` : null; // Get new path from multer

    const course = await Course.findById(req.params.id);

    if (course) {
      course.name = name || course.name;
      course.category = category || course.category;
      course.instructor = instructor || course.instructor;
      course.description = description || course.description;
      course.lectures = parsedLectures; // Always update lectures

      if (thumbnailPath) { // Only update thumbnail if a new file was uploaded
        // Optional: Delete old thumbnail file if it exists
        if (course.thumbnail) {
            const oldFilePath = path.join(process.cwd(), course.thumbnail);
            // Ensure the path is correct before attempting to delete
            if (fs.existsSync(oldFilePath)) {
              fs.unlink(oldFilePath, (err) => {
                  if (err) console.error("Error deleting old thumbnail file:", err);
              });
            }
        }
        course.thumbnail = thumbnailPath;
      }
      // If no new file is uploaded and the frontend explicitly sent an empty thumbnail string, clear it.
      // Note: frontend would need to send `thumbnail: ''` in body along with other fields.
      else if (req.body.thumbnail === '' && !req.file) { // If frontend sends empty string for thumbnail
        // Optional: Delete old thumbnail file if it exists
        if (course.thumbnail) {
            const oldFilePath = path.join(process.cwd(), course.thumbnail);
            // Ensure the path is correct before attempting to delete
            if (fs.existsSync(oldFilePath)) {
              fs.unlink(oldFilePath, (err) => {
                  if (err) console.error("Error deleting old thumbnail file when clearing:", err);
              });
            }
        }
        course.thumbnail = '';
      }

      const updatedCourse = await course.save();
      res.json(updatedCourse);
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Admin
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (course) {
      // Delete the associated thumbnail file from the server
      if (course.thumbnail) {
        const filePath = path.join(process.cwd(), course.thumbnail);
        // Ensure the path is correct before attempting to delete
        if (fs.existsSync(filePath)) {
          fs.unlink(filePath, (err) => {
            if (err) console.error("Error deleting thumbnail file:", err);
          });
        }
      }
      await Course.deleteOne({ _id: req.params.id });
      res.json({ message: "Course removed" });
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};