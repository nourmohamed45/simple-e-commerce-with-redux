import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, image, quantity } = item;
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      <div className="flex items-center">
        <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-gray-800 font-medium">{title}</h3>
          <p className="text-amber-500 font-semibold mt-1">
            ${price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-6">
          <label htmlFor={`quantity-${id}`} className="mr-2 text-gray-600">
            Qty:
          </label>
          <input
            id={`quantity-${id}`}
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-12 border border-gray-300 rounded-md text-center"
          />
        </div>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 transition-colors"
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
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
