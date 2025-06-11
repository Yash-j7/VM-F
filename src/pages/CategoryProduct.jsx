import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import { Button, Modal } from "antd";
import { useCart } from "../context/CartContext";

function CategoryProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [manualQty, setManualQty] = useState("");
  const [manualDiscount, setManualDiscount] = useState(0);

  useEffect(() => {
    if (params?.slug) getCateProd();
  }, [params?.slug]);
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();
  const getCateProd = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  // Helper to get variants for a product
  const getVariants = (p) => [
    {
      id: "single",
      label: p.name + " (1 Pc)",
      price: p.price,
      discount: 0,
      display: p.price?.toLocaleString("en-US", { style: "currency", currency: "INR" }),
    },
    {
      id: "pack",
      label: p.name + " (Pack of 2)",
      price: p.price * 2,
      discount: 0.04, // 4% off
      display: ((p.price * 2) * 0.96).toLocaleString("en-US", { style: "currency", currency: "INR" }),
      original: (p.price * 2).toLocaleString("en-US", { style: "currency", currency: "INR" }),
    },
  ];

  // Generate variant options from selectedProduct.bulkDiscounts
  const getBulkOptions = () => {
    if (!selectedProduct || !selectedProduct.bulkDiscounts || selectedProduct.bulkDiscounts.length === 0) return [];
    return selectedProduct.bulkDiscounts.map((bd) => ({
      id: `bulk_${bd.quantity}`,
      label: `${selectedProduct.name} (x${bd.quantity})`,
      price: selectedProduct.price * bd.quantity,
      discount: bd.discount,
      display: ((selectedProduct.price * bd.quantity) * (1 - bd.discount / 100)).toLocaleString("en-US", { style: "currency", currency: "INR" }),
      original: (selectedProduct.price * bd.quantity).toLocaleString("en-US", { style: "currency", currency: "INR" }),
      quantity: bd.quantity,
    }));
  };

  const handleAddToCart = (variant) => {
    const productToAdd = {
      ...selectedProduct,
      variant: variant.id,
      price: variant.discount ? Math.round(variant.price * (1 - variant.discount / 100)) : variant.price,
      quantity: variant.quantity || 1,
      bulkDiscount: variant.discount || 0,
    };
    addToCart(productToAdd);
    toast.success("Product added to Cart");
    setIsModalOpen(false);
    setManualQty("");
    setManualDiscount(0);
  };

  const handleManualAdd = () => {
    const qty = parseInt(manualQty);
    if (!qty || qty < 1) return;
    const found = selectedProduct.bulkDiscounts?.find((b) => Number(b.quantity) === qty);
    const discount = found ? found.discount : 0;
    const price = selectedProduct.price * qty * (1 - discount / 100);
    handleAddToCart({
      id: `manual_${qty}`,
      label: `${selectedProduct.name} (x${qty})`,
      price: selectedProduct.price * qty,
      discount,
      display: price.toLocaleString("en-US", { style: "currency", currency: "INR" }),
      original: (selectedProduct.price * qty).toLocaleString("en-US", { style: "currency", currency: "INR" }),
      quantity: qty,
    });
  };

  const bulkOptions = getBulkOptions();

  return (
    <div className="h-[80vh]">
      <h1 className="text-3xl text-center">category {category?.name}</h1>
      <h1 className="text-xl text-center mt-5 mb-12">
        Found {products?.length} results
      </h1>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {products?.map((p) => (
            <Card
              key={p._id}
              hoverable
              style={{ width: 300 }}
              className="m-3 p-2"
              cover={
                <div className="h-48 overflow-hidden">
                  <img
                    alt={p.name}
                    src={p.photo[0].split(",")[0]}
                    className="w-full h-full object-contain"
                  />
                </div>
              }
            >
              <Meta title={p.name} description={p.description} />
              <div className="card-name-price mt-3">
                <h5 className="card-title">
                  {p.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "INR",
                  })}
                </h5>
              </div>
              <div className="mt-3 flex">
                <Button
                  type="primary"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  More Details
                </Button>
                <Button
                  type="default"
                  className="ml-2"
                  onClick={() => {
                    setSelectedProduct(p);
                    setIsModalOpen(true);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
        {/* <div className="m-2 p-3">
          {products && products.length < total && (
            <button
              className="btn btn-info"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? "loading..." : "loadmore"}
            </button>
          )}
        </div> */}
      </div>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        title="Select Quantity/Variant"
      >
        <div className="flex flex-col gap-4">
          {/* Single piece option */}
          {selectedProduct && (
            <div className="flex items-center justify-between border p-3 rounded-lg mb-2">
              <div>
                <div className="font-semibold">{selectedProduct.name} (1 Pc)</div>
                <span className="font-bold">{selectedProduct.price?.toLocaleString("en-US", { style: "currency", currency: "INR" })}</span>
              </div>
              <Button type="primary" onClick={() => handleAddToCart({ id: "single", label: selectedProduct.name + " (1 Pc)", price: selectedProduct.price, discount: 0, quantity: 1 })}>
                Add
              </Button>
            </div>
          )}
          {/* Bulk options from admin */}
          {bulkOptions.map((variant) => (
            <div key={variant.id} className="flex items-center justify-between border p-3 rounded-lg mb-2">
              <div>
                <div className="font-semibold">{variant.label}</div>
                <span className="text-red-500 font-bold mr-2">{variant.display}</span>
                <span className="line-through text-gray-400">{variant.original}</span>
                <span className="ml-2 text-green-600">{variant.discount}% OFF</span>
              </div>
              <Button type="primary" onClick={() => handleAddToCart(variant)}>
                Add
              </Button>
            </div>
          ))}
          {/* Manual quantity entry */}
          {selectedProduct && (
            <div className="flex items-center gap-2 border p-3 rounded-lg mb-2">
              <input
                type="number"
                min="1"
                placeholder="Enter quantity (e.g. 7, 15, 100)"
                className="border rounded p-1 w-1/2"
                value={manualQty}
                onChange={e => setManualQty(e.target.value)}
              />
              <Button type="primary" onClick={handleManualAdd}>Add</Button>
              {manualQty && (() => {
                const qty = parseInt(manualQty);
                const found = selectedProduct.bulkDiscounts?.find((b) => Number(b.quantity) === qty);
                if (qty > 0) {
                  const discount = found ? found.discount : 0;
                  const price = selectedProduct.price * qty * (1 - discount / 100);
                  return (
                    <span className="ml-2">
                      {discount > 0 && <span className="text-green-600">{discount}% OFF</span>}
                      <span className="ml-2 font-bold">{price.toLocaleString("en-US", { style: "currency", currency: "INR" })}</span>
                    </span>
                  );
                }
                return null;
              })()}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default CategoryProduct;
