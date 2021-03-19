import React,{useEffect,useState} from 'react'
import Pics from './PicsBackend';
import {loadCart, removeItemFromCart} from "./CartHelper.js"
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

function Bag() {
    
  
    const [product,setProduct]=useState([''])
    const [load,setLoad]=useState(false)
    


const removeProduct=(productId)=>{
    removeItemFromCart(productId)
    setLoad(true)
    
    
}
const perform=()=>{
  setProduct(loadCart()) 
return(
  load&&<Redirect to="/" /> 
)
}    
useEffect(()=>{
     
      perform()   
    },[product])

   
    return (
        <div>
          {
           !product||product==="undefined"||product.length === 0 ? (<div  className="h-screen flex flex-row  justify-center items-center text-6xl text-black">Cart Empty...
           <Link style={{background:"#050B21"}} className="text-2xl text-white font-medium items-center" to="/Cart">Go To Cart</Link>
           
           </div>)
           :product.map((product,index)=>{
                return(
                  <div key={index}  class=" flex flex-col  px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 mt-8 ">
                  <Pics product={product} />
                  <form class="flex-auto p-6">
                     <div class="flex flex-wrap">
                       <h1 class="flex-auto text-xl font-semibold">
                         {product.description}
                       </h1>
                       <div class="text-xl font-semibold text-gray-500">
                       Price: {product.price}
                       </div>
                       <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                         In stock {product.stock}
                       </div>
                     </div>
                     
                     <div class="flex space-x-3 mb-4 text-sm font-medium">
                       <div class="flex-auto flex space-x-3">
                         <button style={{backgroundColor:"#050B21"}} class="w-1/2 h-8 flex items-center justify-center rounded-md text-white" type="submit">Buy now</button>
                       <button onClick={()=>{
                         removeProduct(product._id)
                         }} className="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Remove</button>
                       
                       </div>
                       
                     </div>
                     
                   </form>
                   
               </div>
                )
          })}
          
            </div>
    )
       
    }
export default Bag
