import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { deleteProduct } from "../features/products/productsSlice";

const ProductCard = ({ product }) => {
  const { id, title, price, description, category, image } = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        image,
        quantity: 1,
      })
    );
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-64 bg-gray-200 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/edit/${id}`}
            className="bg-amber-500 text-white px-3 py-2 rounded-md mx-2 hover:bg-amber-600 transition-colors"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-3 py-2 rounded-md mx-2 hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {category}
          </span>
          <span className="text-lg font-bold text-amber-500">
            ${price.toFixed(2)}
          </span>
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-amber-500 transition-colors flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
