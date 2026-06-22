import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState, useContext } from "react";
import { Link } from "react-router";
import { fetchSingleProduct } from "../services/axios";
import LoadingSpiner from "../components/LoadingSpiner";
import storeCart from "../utils/storeCart";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

function ProductsDetail() {
  const { _id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["SingleProduct"],
    queryFn: () => fetchSingleProduct(_id),
  });

  const [amount, setAmount] = useState(1);

  const [color, setColor] = useState("");

  useEffect(() => {
    if (data?.attributes?.colors?.length > 0) {
      setColor(data.attributes.colors[0]);
    }
  }, [data]);

  const addToCart = storeCart((CartItem) => CartItem.addToCart);

z

  if (isLoading) {
    return <LoadingSpiner />;
  }

  if (!data) {
    return (
      <div className="py-20! px-8! mx-auto! max-w-6xl">
        <p className="font-bold text-4xl">There was an error...</p>
      </div>
    );
  }

  const { title, price, image, company, description, colors } = data;

  return (
    <div className="py-20! px-8! mx-auto! max-w-6xl">
      <div className="flex breadcrumbs">
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
        <div className="text-neutral opacity-40 mx-3!">»</div>
        <Link to={"/Products"} className="hover:underline">
          Products
        </Link>
      </div>
      <div className="mt-6! grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <figure>
          <img
            src={image}
            alt={title}
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
          />
        </figure>
        <div>
          <h1 className="capitalize text-3xl font-bold text-[#394e6a]">
            {title}
          </h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">${price / 100}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <p className="font-medium tracking-wider capitalize">colors</p>
            <div className="my-2">
              {data.colors?.map((c) => {
                return (
                  <button
                    key={c}
                    type="button"
                    className={`rounded-full w-6 h-6 mr-2 cursor-pointer border-2 ${
                      c === color ? "border-black" : "border-transparent"
                    }`}
                    style={{ backgroundColor: c }}
                    onClick={(e) => setColor(c)}></button>
                );
              })}
            </div>
          </div>
          <div>
            <p className="py-2 font-medium tracking-wider capitalize">amount</p>
            <select
              id="amount"
              className="select border-[#463aa1] focus:outline-[#463aa1] select-md"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}>
              {Array.from({ length: 20 }, (_, i) => {
                const opt = i + 1;
                return (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            className="mt-10 px-4 min-h-12 bg-[#463aa1] rounded-lg text-[#dbd4ed] text-[14px] font-semibold uppercase cursor-pointer"
            onClick={handleAddToCart}>
            add to bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetail;
