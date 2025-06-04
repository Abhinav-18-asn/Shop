import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { useContext } from 'react';
import axios from '../utils/Axios';
import Loading from './Loading';
const Home = () => {
  const [products] = useContext(ProductContext)
  const {search} = useLocation()
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProduct,setFilteredProduct] = useState(null)

  const getProductCat = async()=>{
    try{
        const {data} = await axios.get(`/products/category/${category}`)
        setFilteredProduct(data)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{ 
      if(!filteredProduct || category == "undefined" ) setFilteredProduct(products)
      if(category!="undefined"){

        setFilteredProduct(products.filter(p=>p.category == category))
      } 
  },[category,products])
  return products ? (
    <>
      <Nav />
      {/*Body*/}
      <div className=" w-full overflow-x-hidden overflow-y-auto px-10 py-8 flex flex-wrap gap-2">
        {filteredProduct &&filteredProduct.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="card bg-white p-3 overflow-hidden w-[18%] flex justify-center flex-col h-[40vh] items-center shadow-xl/30  shadow-zinc-400 rounded"
            >
              <div
                className="w-full hover:scale-105 ease-in-out duration-300 h-[20rem] bg-center rounded-md bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              />
              <h1 className="mt-5 text-sm tracking-tight leading-none">
                {p.title}
              </h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home
