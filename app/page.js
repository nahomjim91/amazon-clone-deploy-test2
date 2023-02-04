import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '@/app/components/Header'
 import Banner from '@/app/components/Banners'
import ProductFeed from './components/ProductFeed'
//import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export  default async function Home() {
 const products = await getData();
  return (
   <div className='bg-gray-100 '>
    <Header/>
    <main className='max-w-screen-2xl mx-auto'>
        <Banner/>
      
        <ProductFeed products={products}/>
        
    </main>
    </div>
  )
}
 const getData = async () => {
   
    const products = await fetch("https://fakestoreapi.com/products") 
    const data = await products.json()
    return data
  
  }