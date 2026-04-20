import CourseD from "../models/CourseD.js";

export const createCoursed = async (req, res) => {
    try {
        const { name, category, description, instructor } = req.body;
        const image = req.file ? req.file.filename : null;


        const course = new CourseD({
            name,
            category,
            description,
            instructor,
            image
        });

        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCoursed = async (req, res) => {
    try {
        const courses = await CourseD.find().sort({ createdAt: -1 });
        res.json(courses)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};