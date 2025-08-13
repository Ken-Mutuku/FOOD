import mongoose, { mongo } from "mongoose";

// this is what will be stored in the database
const foodSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    price: {type:Number, required: true},
    image: {type:String, required: true},
    category: {type:String, required: true},
})
//if model is already defined, use it, otherwise create a new one
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
 // export the model so it can be used in other files
 export default foodModel;