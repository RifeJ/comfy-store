import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { id, attributes } = product;
  const { title, price, image } = attributes;

  return (
    <div className="card w-full shadow-xl hover:shadow-2xl transition duration-300 bg-base-100">
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt={title}
          className="rounded-xl h-64 md:h-48 w-full object-cover"
        />
      </figure>
      <Link
        to={`/Products/${id}`}
        className="card-body items-center text-center">
        <h2 className="card-title capitalize tracking-wider">{title}</h2>
        <p className="text-primary text-lg font-semibold">${price / 100}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
