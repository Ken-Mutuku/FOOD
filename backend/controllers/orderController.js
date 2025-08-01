import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
//creating user order from fronted
const  placeOrder = async(req, res)=>{
    const fronted_url = "http://localhost:5173"
    try{
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
// Create a Stripe Checkout session
        const line_items = req.body.items.map((item) => ({
            price_data:{
                currency:"usd",
                product_data:{
                    name: item.name, 
                },
                unit_amount: item.price*100*80 // Assuming price is in dollars, convert to cents

            },
            quantity: item.quantity,
        }))

        // Add delivery charges to the line items
        line_items.push({
            price_data:{
                currency:"usd",
                product_data:{
                    name: "Delivery Charges",
                },
                unit_amount:2*100*80, // Assuming delivery charges are $5.00
                quantity: 1,
            }
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url: `${fronted_url}/verify?success = true&orderId=${newOrder._id}`,
            
            cancel_url: `${fronted_url}/verify?success = false&orderId=${newOrder._id}`,
           
        })
        res.json({success:true, session_url: session.url});

    }catch(error) {
        console.error("Error placing order:", error);
        res.status(500).json({ success:false, message: "Internal server error" });
    }

} 

export{placeOrder}