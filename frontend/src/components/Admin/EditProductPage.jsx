import React, { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    CountInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collection: "",
    material: "",
    gender: "",
    image: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md ">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-6">
          <label className="block  font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        {/* Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-2 "
            rows={4}
            required
          ></textarea>
        </div>
        {/* price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-2 "
          />
        </div>
        {/* Count In Stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Count In Stock</label>
          <input
            type="number"
            name="CountInStock"
            value={productData.CountInStock}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-2 "
          />
        </div>
        {/* sku */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-2 "
          />
        </div>
        {/* sizes */}
        <div className="mb-6"> 
          <label className="block font-semibold mb-2">Sizes (comma-separated)</label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2 "
          />
        </div>
        {/* colors */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Colors(comma-separated)</label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2 "
          />
        </div>
        {/* image upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2 ">Upload Images</label>
          <input type="file" onChange={handleImageUpload} />
          <div className="flex gap-4 mt-4">
            {productData.image.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img.url}
                  alt={img.altText || "product image"}
                  className="w-20  h-20 object-cover  rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors "
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
