import React, { useContext, useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from '../utils/Axios'
import Loading from './Loading'
import { ProductContext } from '../utils/Context'
const Details = () => {
 const [products,setProducts] = useContext(ProductContext)
 const [product,setProduct] = useState(null)
 const {id} = useParams()


//  const getSingleData = async()=>{
//   try{
//     const {data} = await axios.get(`/products/${id}`)
//         setProduct(data)
//   }
//   catch(err){
//     console.log(err)
//   }
// }
useEffect(()=>{
  if(!product){
    setProduct(products.filter((p)=>p.id == id)[0])
  }
},[])
const ProductDeleteHandler=(id)=>{
  const copyProduct = product.filter(p=>p.id !==id)
  setProducts(products)
  localStorage.setItem("products",JSON.stringify(copyProduct))
}

  return product ? (
    <>
      <div className="w-[90%] flex gap-[4rem] items-center px-10 bg-zinc-200 m-auto h-screen">
        <img
          className="w-[30%] h-[22rem] bg-white object-contain rounded-md hover:scale-105 ease-in-out duration-200 shadow-xl/30 shadow-zinc-500 px-3 py-3 contrast-100"
          src={`${product.image}`}
          alt=""
        />
        <div className=" w-[70%] h-[55%] p-4 rounded-md shadow-xl/30 shadow-zinc-500">
          <h2 className="text-[2.5rem] tracking-tight font-semibold leading-13">
            {product.title}
          </h2>
          <h2 className="text-[1.25rem] mt-2 font-semibold text-zinc-600">
            ${product.price}
          </h2>
          <h2 className="text-[1.25rem] mt-2 tracking-tight font-semibold ">
            {product.description}
          </h2>
          <h2 className="text-[1.25rem] mb-3 font-semibold mt-2 text-slate-500">
            {product.category}
          </h2>
          <Link className="px-4 py-1 hover:shadow ease-in duration-200 shadow-green-400 text-green-400 mr-2 text-lg font-semibold rounded-md ">
            Edit
          </Link>
          <button onClick={()=>ProductDeleteHandler(product.id)} className="px-4 ease-in duration-50 py-1 hover:shadow rounded-md shadow-red-400 text-lg font-semibold  text-red-400">
            Delete
          </button>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Details
