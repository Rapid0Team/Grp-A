const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // ✅ Removed deprecated options
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        process.exit(1); // Exit the process if the database connection fails
    }
};

module.exports = connectDb;
