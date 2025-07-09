import React, { useState} from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Add = () => {
    const url ="http://localhost:4000";
    const[image,setImage] = useState(false);
    // this also puts the default data sample set
    const[data,setData] = useState({
        name:"",
        description:"",
        category:"Salad",
        price:""
    })
    const onChangeHandler = (event) => {
        // this function is used to set the data in the state, onchange handler function, shows up on the console
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
        }
    //to test if the handler is functioning properly well use a use effect
 
    // useEffect(() => {
    //     console.log(data); 
    // }, [data]); 
    const onsubmitHandler = async(event) =>{
            event.preventDefault();
            // this function is used to submit the form, it will upload the image and data to  and also prevent reloading
             // this is the api call to upload the data to the server
            const formData = new FormData();
            formData.append('name', data.name); 
            formData.append('description', data.description);
            formData.append('price', Number(data.price));
            formData.append('category', data.category);
            formData.append('image', image);
           //this will store the response from the server
           const response = await axios.post(`${url}/api/food/add`, formData);
           if (response.data.success) {
            // if the response is successful, then data will be reset
            setData({
                name:"",
                description:"",
                category:"Salad",
                price:""
            });
            setImage(false);
            // and a toast will be shown
            toast.success(response.data.message)
           }
           else{
            // if the response is not successful, then a toast will be shown
            toast.error(response.data.message)
           }

    }
  return (
    <div>
      <div className="add">
        <form className="flex-col" onSubmit={onsubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    {/* the url shows a preview of the image */}
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                {/* //function which uploads files is based on image */}
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>
            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows="5" placeholder='Write content here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    {/* /* //category select button , using select, and options*/}
                    <select onChange={onChangeHandler} name="category">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' required />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
      </div>
    </div>
  )
}

export default Add
