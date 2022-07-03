const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    taskNumber: {
        type: Number,
        required: true,
        default: 100
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
},
    { timestamps: true });

// Connect tasksSchema with the "tasks" collection
module.exports = mongoose.model('Task', tasksSchema)