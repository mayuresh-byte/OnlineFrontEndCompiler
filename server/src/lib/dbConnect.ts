import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!, {
            dbName: 'web-dev-compiler'
        });
        console.log("Connection Established !!!");
    } catch (error) {
        console.log("Error connecting to DB", error);
    }
    
}