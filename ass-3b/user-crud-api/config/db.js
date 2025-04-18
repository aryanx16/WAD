const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        console.log("connecting to db..")
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
module.exports = connectDB;
