import React, { useState } from "react";
import { ProductContex2 } from "../utils/ProductContex2";
import LoadingSpiner from "../components/LoadingSpiner";
import Filters from "../components/Filters"; // We will create this next
import ProductCard from "../components/ProductCard"; // Optional: Move the card to its own file too
import PaginationContainer from "../components/PaginationContainer";

const initialFilters = {
  search: "",
  category: "all",
  company: "all",
  order: "a-z",
  price: 100000,
  shipping: "",
  page: "1",
};

function Products() {
  const [filters, setFilters] = useState(initialFilters);

  // Use URLSearchParams to build the URL cleanly
  const queryParams = new URLSearchParams(filters).toString();
  const url = `https://strapi-store-server.onrender.com/api/products?${queryParams}`;

  const { data, loading, meta } = ProductContex2(url);

  if (loading) return <LoadingSpiner />;

  // Safely get meta data
  const categories = meta?.categories || [];
  const companies = meta?.companies || [];

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <section className="py-20 px-8 mx-auto max-w-6xl">
      {/* 1. FILTER SECTION */}
      <Filters
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        companies={companies}
        onReset={resetFilters}
      />

      {/* 2. PRODUCTS GRID */}
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data && data.length > 0 ? (
          data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2 className="text-2xl mt-16">No products matched your search...</h2>
        )}
      </div>
      <PaginationContainer
        meta={meta}
        filters={filters}
        setFilters={setFilters}
      />
    </section>
  );
}

export default Products;

{
  /* import React, { useState } from "react";

import { ProductContex2 } from "../utils/ProductContex2";

import LoadingSpiner from "../components/LoadingSpiner";

import { Link } from "react-router";



const order = [

  { id: 1, text: "a-z" },

  { id: 2, text: "z-a" },

  { id: 3, text: "high" },

  { id: 4, text: "low" },

];



function Products() {

  const [price, setPrice] = useState(100000);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [company, setCompany] = useState("");

  const [sortBy, setSortBy] = useState("");

  const [page, setPage] = useState("1");

  const [shipping, setShipping] = useState("");



  const { data, loading, meta } = ProductContex2(

    `https://strapi-store-server.onrender.com/api/products?search=${search}&category=${category}&company=${company}&order=${sortBy}&price=${price}&page=${page}&shipping=${shipping}`,

  );



  const categories = meta?.categories;

  const companies = meta?.companies;

  const pagination = meta?.pagination;



  if (loading) {

    return <LoadingSpiner />;

  }



  return (

    <section className="py-20! px-8! mx-auto! max-w-6xl">

      <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">

        <div className="flex flex-col">

          <label htmlFor="">Search Product</label>

          <input

            type="text"

            className="input input-bordered input-sm"

            onChange={(e) => setSearch(e.target.value)}

          />

        </div>

        <div className="flex flex-col">

          <label htmlFor="" className="label">

            Select Category

          </label>

          <select

            name=""

            id=""

            className="select select-bordered select-sm"

            onChange={(ev) => setCategory(ev.target.value)}>

            {categories.map((cat) => {

              return (

                <option key={cat} value={`${cat}`}>

                  {cat}

                </option>

              );

            })}

          </select>

        </div>

        <div className="flex flex-col">

          <label htmlFor="" className="label">

            Select Company

          </label>

          <select

            name=""

            id=""

            className="select select-bordered select-sm"

            onChange={(eve) => setCompany(eve.target.value)}>

            {companies.map((com) => {

              return (

                <option key={com} value={`${com}`}>

                  {com}

                </option>

              );

            })}

          </select>

        </div>

        <div className="flex flex-col">

          <label htmlFor="" className="label">

            Sort By

          </label>

          <select

            name=""

            id=""

            className="select select-bordered select-sm"

            onChange={(event) => setSortBy(event.target.value)}>

            {order.map((order) => {

              return (

                <option key={order.id} value={`${order.text}`}>

                  {order.text}

                </option>

              );

            })}

          </select>

        </div>

        <div className="flex flex-col">

          <label htmlFor="">

            <span>Select Price</span>

            <span>${price / 100}</span>

          </label>

          <input

            type="range"

            value={price}

            min={0}

            max={100000}

            className="range range-primary range-sm"

            onChange={(e) => setPrice(e.target.value)}

          />

          <div className="flex">

            <p>0</p>

            <p>Max : $1,000.00</p>

          </div>

        </div>

        <div className="flex flex-col items-center">

          <label htmlFor="">Free Shipping</label>

          <input

            type="checkbox"

            className="checkbox checkbox-primary checkbox-sm"

            onChange={(e) => setShipping(e.target.checked ? "on" : "")}

          />

        </div>

        <button className="btn btn-primary btn-sm text-[14px] uppercase">

          search

        </button>

        <button

          className="btn btn-accent btn-sm text-[14px] uppercase text-base-100"

          onClick={() => {

            setPrice(100000);

            setSearch("");

            setCategory("");

            setCompany("");

            setSortBy("");

            setPage("1");

            setShipping("");

          }}>

          reset

        </button>

      </form>

      <div className="pt-12! grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        {data &&

          data.map((product) => {

            const { id, attributes } = product;

            const { title, price, image } = attributes;



            return (

              <div

                key={id}

                className="card w-full shadow-xl hover:shadow-2xl transition duration-300">

                <figure className="px-4! pt-4!">

                  <img

                    src={image}

                    alt={title}

                    className="rounded-xl h-64 md:h-48 w-full object-cover"

                  />

                </figure>

                <Link

                  to={`/Products/${id}`}

                  className="card-body items-center text-center">

                  <h2 className="card-title capitalize tracking-wider">

                    {title}

                  </h2>

                  <p className="text-primary">${price / 100}</p>

                </Link>

              </div>

            );

          })}

      </div>

      <div></div>

    </section>

  );

}*/
}
