import React, {useState} from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
    const[image,setImage] = useState(false);
    // this also puts the default data sample set
    const[data,setData] = useState({
        name:"",
        description:"",
        category:"Salad",
        price:""
    })
  return (
    <div>
      <div className="add">
        <form className="flex-col">
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
                <input type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Product description</p>
                <textarea name="description" rows="5" placeholder='Write content here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    {/* /* //category select button , using select, and options*/}
                    <select name="category">
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
                    <input type="number" name='price' placeholder='$20' required />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
      </div>
    </div>
  )
}

export default Add
