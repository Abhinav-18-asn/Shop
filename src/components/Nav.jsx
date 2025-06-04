import React,{useContext} from 'react'
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';
const Nav = () => {

  const [products] = useContext(ProductContext)

  let distinctCategory = 
  products && products.reduce((acc,cv)=>[...acc,cv.category],[])
  distinctCategory = [...new Set(distinctCategory)]
  console.log(distinctCategory)

  return (
    <nav className="w-[20rem]  h-full bg-gray-300 rounded-md px-4 py-4 flex flex-col items-center">
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
      <div className="w-[80%]">
        {distinctCategory.map((c, i) => (
          <Link
          key={i}
            to={`/?category=${c }`}
            className="flex items-center text-[1.2rem] font-semibold"
          >
            <span className="w-[12px] mr-2 h-[12px] bg-stone-400 rounded-lg"></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav
