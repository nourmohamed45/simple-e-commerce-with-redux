import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { addProduct } from "../features/products/productsSlice";

const AddProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    dispatch(addProduct(formData))
      .unwrap()
      .then(() => {
        alert("Product added successfully!");
        navigate("/");
      })
      .catch((error) => {
        alert(`Failed to add product: ${error.message}`);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Add New Product
        </h1>
        <ProductForm onSubmit={handleSubmit} title="Product Information" />
      </div>
    </div>
  );
};

export default AddProductPage;
