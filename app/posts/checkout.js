import Header from "@/app/components/Header";
import Providers from "@/app/Providers";
import { selectItems } from "@/slices/basketSlice";
import Image from "next/image";
import { useSelector } from "react-redux";
import '../../app/./globals.css'


function checkout() {

  // const items = useSelector(selectItems);

  // const items = useSelector(selectItems)


  return (
    <div className="bg-gray-100">
          {/* <Header/> */}
      

      <main className="lg:flex max-w-screen-2xl mx-auto">
      {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            alt=""
            width={1020}
            height={250}
            object-fit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            {/* <h1 className="text-3xl border-b pb-4">{items.length === 0? 'Your Amazon Basket is empty':'Shopping Basket'} </h1> */}
          </div>
        </div>
      {/* right */}
      <div>
        
      </div>
      </main>
    </div>
   
  )
}

export default checkout;