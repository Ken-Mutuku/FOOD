import foodModel from "../models/foodModel.js";
import fs from "fs";//fs is a built-in Node.js module for file system operations


//add food item

const addFood = async(req, res) => {
    let image_filename=`${req.file.filename}`;//get the image filename from the request
    const food= new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category 
    })
    try{
        await food.save();//save the food item to the database
        res.json({success:true,message:"Food item added successfully"});//send a success response

    } catch (error) {
        console.error(error);//log the error to the console
        res.json({success:false,message:"Failed to add food item"});//send a failure response
    }
}

//all food list
const listFood= async(req, res) => {
    try{
        const foods= await foodModel.find({});
        res.json({success:true, data:foods});//send the list of food items as a response
    } catch (error) {
        console.error(error);//log the error to the console

        res.json({success:false,message:"Failed to fetch food items"});//send a failure response
    }
}
//Update food item

const updateFood = async (req, res) => {
    try {
        const { id, name, description, price, category } = req.body;
        let updateData = {};

        if (name) updateData.name = name;
        if (description) updateData.description = description;
        if (price) updateData.price = price;
        if (category) updateData.category = category;
        if (req.file && req.file.filename) {
            updateData.image = req.file.filename;
        }

        const updatedFood = await foodModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!updatedFood) {
            return res.json({ success: false, message: "Food item not found" });
        }

        res.json({ success: true, message: "Food item updated successfully", data: updatedFood });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Failed to update food item" });
    }
}
//Remove food item
 const removeFood = async (req, res) => {
    try{
        const food = await foodModel.findById(req.body.id);//find the food item by its ID.b
        fs.unlink(`uploads/${food.image}`, ()=>{})

        await foodModel.findByIdAndDelete(req.body.id);//delete the food item from the database
        res.json({success:true,message:"Food item removed successfully"});//send a success response 
    }catch (error) {
        console.error(error);//log the error to the console
        res.json({success:false,message:"Failed to remove food item"});//send a failure response
    }
 }

export { addFood, listFood , removeFood, updateFood }; //export the functions so they can be used in other files