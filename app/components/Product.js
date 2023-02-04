"use client"

import Image from "next/image"
import { useState } from "react"
import { LightBulbIcon, StarIcon } from "@heroicons/react/outline"
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";
// import CurrencyFormat from "react-currency-format"



const MIN_RATING = 1;
const MAX_RATING = 5;

function Product({id, title,price,description,category,image}) {
    
    const dispatch = useDispatch();
    const [rating] = useState(
        Math.floor( Math.random() * (MAX_RATING - MIN_RATING +1)) + MIN_RATING
        );
    const [hasPrime] = useState(Math.random()< 0.5 )
    const addItemToBasket = ()=>{
        const product ={
          id, 
          title,
          price,
          description,
          category,
          image,
        };
        //send the product as am action to redux stor the basket slice
        dispatch(addToBasket(product));
        
    }
  return (
    <>
       <div className="relative flex flex-col m-5 bg-white z-30 p-10" >
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
     
      <Image className=" flex flex-col " src={image} alt="" height={200} width={200} object-fit="contain" />
      
     <h4 className="my-3">{title}</h4>

      {/* <div className="flex ">
        {Array(rating).fill().map((_,i)=>(
            // <StarIcon className="h-5 text-yellow-500"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        ))}
      </div> */}
       
        <p className="text-xs my-2 line-clamp-2 ">{description}</p>
       <div className="mb-5">
            {/* <CurrencyFormat value={price} prefix='$' /> */}
       </div>
       {/* {hasPrime? (
            <div className="flex items-center space-x-2 -mt-5">
                <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
                <p className="text-xs text-gray-500"> FREE NEXT-day delivery</p>
           </div>):<div></div>} */}
        <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
    </div>
  
    </>
  )
    
}

export default Product