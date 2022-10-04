import mongoose from "mongoose" 

export const connectDB = async() => {
    try {
        mongoose.connect("mongodb+srv://DefnotCash:<password>@cluster0.rlqfuxe.mongodb.net/test")
        console.log(`Connected to MongoDB Successfully`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
};
