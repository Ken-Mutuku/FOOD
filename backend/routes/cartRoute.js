import express from "express"
import { addToCart, getCart, removeFromCart } from "../controllers/cartController.js";
import authMiddlware from "../middleware/auth.js";
// Importing the necessary functions from the cartController
const cartRouter = express.Router();

cartRouter.post("/add", authMiddlware,addToCart); // Route to add an item to the cart
cartRouter.post("/remove", authMiddlware,removeFromCart)//
cartRouter.post("/get",authMiddlware,getCart)

export default cartRouter;
