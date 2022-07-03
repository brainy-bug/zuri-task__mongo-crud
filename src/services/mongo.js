const mongoose = require("mongoose")

const MONGO_URL = "mongodb+srv://todo-api:TXxDIBZY1Ham2OlA@todocluster.z1fwb.mongodb.net/?retryWrites=true&w=majority"

mongoose.connection.once('open', () => {
    console.log('MongoDB Connection Succeeded.')
});

mongoose.connection.on('error', (err) => {
    console.log('Error in DB connection: ' + err)
})

async function mongoConnect() {
    // Connect MongoDB at default port.
    await mongoose.connect(MONGO_URL);

}

async function mongoDisconnect() {
    mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}