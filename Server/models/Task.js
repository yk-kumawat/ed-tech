import mongoose from 'mongoose';

const taskScheema = new mongoose.Schema({
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
        require:true
    },
    name: String,
    description: String,
    tools: [String],
    duration: String
}, { timestamps: true });

export default mongoose.model("Task", taskScheema);
