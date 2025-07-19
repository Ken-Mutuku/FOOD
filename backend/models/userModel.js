import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {type: String,requried: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cartData:{
        type: Object,
        default: {}
    }
},{minimize:false})////minimize:false allows empty objects to be stored in the database
 
const userModel = mongoose.model.users || mongoose.model('users', userSchema);//if the model already exists, use it, otherwise create a new one
export default userModel;
