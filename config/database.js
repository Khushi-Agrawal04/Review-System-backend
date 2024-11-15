import mongoose from "mongoose";

const dbconnect=async()=>{
    try {
       await mongoose.connect(process.env.MONGOOSE_URL)
       console.log("MONGODB connected successfully");
    }
    catch (error) {
        console.log("MONGODB connected failed",error);
    }
}

export default dbconnect;