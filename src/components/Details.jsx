import React from 'react'
import {Link} from 'react-router-dom'
const Details = () => {
  return (
    <>
      <div className="w-[90%] flex gap-[4rem] items-center px-10 bg-zinc-200 m-auto h-screen">
        <img
          className="w-[30%] h-[22rem] object-cover rounded-md hover:scale-105 ease-in-out duration-200 shadow-xl/30 shadow-zinc-500"
          src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnfGVufDB8fDB8fHww"
          alt=""
        />
        <div className=" w-[70%] h-[55%] p-4 rounded-md shadow-xl/30 shadow-zinc-500">
          <h2 className="text-[2.5rem] tracking-tight font-semibold leading-13">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h2>
          <h2 className="text-[1.25rem] mt-2 font-semibold text-zinc-600">
            Rs.109.95
          </h2>
          <h2 className="text-[1.25rem] mt-2 tracking-tight font-semibold ">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </h2>
          <h2 className="text-[1.25rem] mb-3 font-semibold mt-2 text-slate-500">
            Men's Clothing
          </h2>
          <Link className="px-4 py-1 hover:shadow ease-in duration-200 shadow-green-400 text-green-400 mr-2 text-lg font-semibold rounded-md ">
            Edit
          </Link>
          <Link className="px-4 ease-in duration-50 py-1 hover:shadow rounded-md shadow-red-400 text-lg font-semibold  text-red-400">
            Delete
          </Link>
        </div>
      </div>
    </>
  );
}

export default Details
