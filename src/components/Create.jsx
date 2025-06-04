import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
function Create() {
   const navigate = useNavigate()
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1||
      description.trim().length < 5
    ) {
      alert("Every field must have 4 or more characters");
    }

    const product = {
      id : nanoid(),
      title,
      image,
      price,
      description,
    };
    setProducts([...products, product]);
    localStorage.setItem("product",JSON.stringify(products))
    navigate("/")
  };

  return (
    <form
      onSubmit={addProductHandler}
      action=""
      className=" w-full flex flex-col gap-2 h-screen items-center p-[5%] "
    >
      <h1 className="text-3xl mb-4 text-gray-700 font-semibold">
        Add New Prodcts
      </h1>
      <input
        type="url"
        placeholder="Image url"
        className="text-xl w-1/2 bg-zinc-100 rounded-md p-2 "
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-xl w-1/2 bg-zinc-100 rounded-md p-2 "
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-xl w-[48%] bg-zinc-100 rounded-md p-2 "
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number "
          placeholder="Price"
          className="text-xl w-[48%] bg-zinc-100 rounded-md p-2 "
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="text-xl w-1/2 bg-zinc-100 rounded-md p-2 "
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Enter product description here..."
        rows="10"
      ></textarea>
      <div className="flex w-1/2">
        <button className=" border-blue-500 border rounded-md text-blue-600 py-2 px-2">
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
