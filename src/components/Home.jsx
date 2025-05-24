import React from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
    <Nav />
      <div>
        {/*Body*/}
        <div className="h-screen w-full bg-zinc-200 px-8 py-8">
          <Link to="/details" className="card overflow-hidden w-[14rem] p-3 flex flex-col items-center h-[16rem] bg-zinc-300 shadow-md  shadow-zinc-400 rounded">
            <img
              className="w-full hover:scale-105 ease-in-out duration-200 object-cover h-[10rem] rounded-md bg-contain"
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnfGVufDB8fDB8fHww"
              alt=""
            />
            <h1 className="mt-2">Lorem ipsum dolor sit amet.</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home
