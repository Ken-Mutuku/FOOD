import React, { useEffect } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

//passed the url using props
const List = ({url}) => {
  //we have to first store all the data in a state variable
  //then we can use the useEffect hook to fetch the data from the API

  const[list, setList] = React.useState([]);
  const fetchlist = async () => {
  //backtick is used to create a template literal
      const response = await axios.get(`${url}/api/food/list`);
      // console.log(response.data);
      if(response.data.success) {
        setList(response.data.data);
      }
      else{
        toast.error(response.data.message);
      }
  }
  const removeFood = async(foodid)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodid});
    await fetchlist();
    if(response.data.success) {
      toast.success(response.data.messages);
    }
    else{
      toast.error(response.data.message);
    }
  }
  //to fetch the data when the page is reloaded, we can use the useEffect hook
  useEffect(() => {
    fetchlist();
  },[])
  return (
    <div className='list add flex-col'>
     <p>All foods List</p>
     <div className="list-table">
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b> Action</b>
      </div>
      {list.map((item,index) => {
          return(
            <div className="list-table-format" key={index}>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor' >X</p>
            
            </div>
          )
      })}

     </div>
    </div>
  )
}

export default List
