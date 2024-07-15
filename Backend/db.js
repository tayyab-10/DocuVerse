const mongoose = require('mongoose');


const mongoURI = "mongodb://localhost:27017/DocuVerse";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
}

module.exports = connectToMongo;