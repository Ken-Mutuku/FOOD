import express from "express"
import authMiddlware from "../middleware/auth.js";
import { placeOrder, verifyOrder ,userOrders,updateStatus, listOrders} from "../controllers/orderController.js";

const orderRouter = express.Router();
//authmiddleware is used to protect the routes and where user id is required
orderRouter.post("/place", authMiddlware, placeOrder);
orderRouter.post("/verify", verifyOrder); // Assuming you have a verifyOrder function
orderRouter.post("/userorders", authMiddlware, userOrders); // Route to get user orders
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus); // Route to update order status, assuming you have an updateStatus function
  

export default orderRouter;