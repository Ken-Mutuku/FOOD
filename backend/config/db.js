import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kendev:ken77%2A%2A@cluster0.ch5xz7x.mongodb.net/FoodDelivery').then (()=>console.log("MongoDB connected successfully"));
}