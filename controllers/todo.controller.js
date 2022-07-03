const {
    existsTaskWithId,
    deleteTaskById,
    updateExistingTask,
    getAlltasks,
    scheduleNewtask
} = require('../src/models/todo.model');

async function httpGetAllTasks(req, res) {
    return res.status(200).json(await getAlltasks())
}

async function httpAddNewTask(req, res) {
    const task = req.body
    if (!task.title || !task.description) {
        return res.status(400).json({
            error: "Missing required task properties"
        })
    }
    await scheduleNewtask(task)
    
    return res.status(201).json(task)
}

async function httpEditTask(req, res) {
    const taskId = Number(req.params.id)
    const updatedTask = req.body;

    //get existing task
    const task = await existsTaskWithId(taskId);

    //check for invalid task
    if (!task) {
        return res.status(404).json({
            error: "task not found"
        })
    }

    //update task by id
    updateExistingTask(updatedTask, taskId)

    return res.status(201).json({
        acknowledged: true
    });
}

async function httpDeleteTask(req, res) {
    const taskId = Number(req.params.id)

    const existstask = await existsTaskWithId(taskId);

    if (!existstask) {
        return res.status(404).json({
            error: "task not found."
        })
    }

    const deleted = await deleteTaskById(taskId)

    if (!deleted) {
        return res.status(404).json({
            error: "task not deleted."
        })
    }
    return res.status(200).json({
        acknowledged: true
    })
}


module.exports = {
    httpGetAllTasks,
    httpAddNewTask,
    httpEditTask,
    httpDeleteTask,
};