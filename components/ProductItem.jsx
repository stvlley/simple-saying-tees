import Link from "next/link";
import React from "react";
import Image from "next/image";


const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <Image
          className="rounded shadow"
          src={product.image}
          height={500}
          width={500}
          alt="product"
        />
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
            <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
