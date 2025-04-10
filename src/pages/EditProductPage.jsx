import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import {
  fetchProductById,
  updateProduct,
} from "../features/products/productsSlice";

const EditProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedProduct, status, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleSubmit = (formData) => {
    dispatch(updateProduct({ id, product: formData }))
      .unwrap()
      .then(() => {
        alert("Product updated successfully!");
        navigate("/");
      })
      .catch((error) => {
        alert(`Failed to update product: ${error.message}`);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Product</h1>

        {status === "loading" && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        )}

        {status === "failed" && (
          <div className="text-red-500 text-center py-4">Error: {error}</div>
        )}

        {status === "succeeded" && selectedProduct && (
          <ProductForm
            product={selectedProduct}
            onSubmit={handleSubmit}
            title="Edit Product Information"
          />
        )}
      </div>
    </div>
  );
};

export default EditProductPage;
