import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="w-[20rem] h-screen bg-zinc-300 px-4 py-4 flex flex-col items-center">
        <a
          href="/create"
          className="border-blue-300 text-[1.1rem] border-2 mb-2 p-2 rounded-md"
        >
          Add New Products
        </a>
        <hr className="w-[17rem]" />
        <h2 className="mt-4 text-2xl w-[80%] font-semibold mb-2">
          Category Filter
        </h2>
        <ul className="w-[80%]">
          <li className="flex items-center text-[1.2rem] font-semibold">
            <span className="w-[12px] mr-2 h-[12px] bg-red-400 rounded-lg"></span>{" "}
            cat 1
          </li>
          <li className="flex items-center text-[1.2rem] font-semibold">
            <span className="w-[12px] mr-2 h-[12px] bg-green-400 rounded-lg"></span>{" "}
            cat 2
          </li>
          <li className="flex items-center text-[1.2rem] font-semibold">
            <span className="w-[12px] mr-2 h-[12px] bg-blue-400 rounded-lg"></span>{" "}
            cat 3
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav
