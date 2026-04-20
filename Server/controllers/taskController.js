import Task from "../models/Task.js";

export const task = async(req,res)=>{
    try {
        const { sessionId, name, description, tools, duration } = req.body;
        const task = new Task({
            sessionId, 
            name, 
            description, 
            tools, 
            duration
        });

        await task.save()

        res.status(201).json(task);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const getTasks = async (req,res)=>{
 try{

  const { sessionId } = req.query

  const tasks = await Task.find({ sessionId })

  res.json(tasks)

 }catch(error){
  res.status(500).json({message:error.message})
 }
}