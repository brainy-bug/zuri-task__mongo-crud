const tasks = require('./todo.mongo');

const DEFAULT_TASK_NUMBER = 100;

const task = {
    taskNumber: 100,
    title: "Pay bills",
    description: "I need to pay my bills before the ending of the month"
};

saveTask(task)

async function existsTaskWithId(taskId) {
    return tasks.findOne({
        taskNumber: taskId
    })
}

async function abortTaskById(taskId) {
    const aborted = await tasks.deleteOne({
        taskNumber: taskId
    })
    return aborted.acknowledged === true
}

async function getLatesttaskNumber() {
    //find task with the highes flight number
    const latestTask = await tasks
        .findOne()
        .sort('-taskNumber');

    if (!latestTask) {
    return DEFAULT_TASK_NUMBER
    }

    return latestTask.taskNumber
}


async function getAlltasks() {
    return await tasks.find({}, { '_id': 0, '__v': 0 })
}

async function saveTask(task) {
    await tasks.findOneAndUpdate(
        {
            taskNumber: task.taskNumber,
        },
        task, { upsert: true })
}

async function scheduleNewtask(task) {
    const newtaskNumber = await getLatesttaskNumber() + 1;

    const newtask = Object.assign(task, {
        taskNumber: newtaskNumber,
    })

    await saveTask(newtask)
}

module.exports = {
    existsTaskWithId,
    abortTaskById,
    getAlltasks,
    scheduleNewtask,
}