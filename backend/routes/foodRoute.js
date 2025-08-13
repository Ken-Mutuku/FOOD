import express from 'express';
import { addFood, listFood, removeFood, updateFood } from '../controllers/foodController.js';
import multer from 'multer';//creates an image storage system

const foodRouter = express.Router();//create a new router for food

//image storage Engine
const storage = multer.diskStorage({
    destination:"uploads/",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)//makes the image name unique by appending the current timestamp
    }
});

const upload = multer({storage:storage});// middleware that sort of create an instance of multer with the storage engine
//endpoints
foodRouter.post("/add",upload.single("image"),addFood);//add food item route, single image upload with the name "image" in the form data
foodRouter.get("/list",listFood)
foodRouter.post("/remove", removeFood);//remove food item route
foodRouter.post("/update", upload.single("image"), updateFood);//update food item route, single image upload with the name "image" in the form data





export default foodRouter;