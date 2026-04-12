import React from "react";

const orderOptions = ["a-z", "z-a", "high", "low"];

const Filters = ({ filters, setFilters, categories, companies, onReset }) => {
  // THE MAGIC FUNCTION: Handles text, select, range, and checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? "on" : "") : value,
      page: "1", 
    }));
  };

  return (
    <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <div className="flex flex-col">
        <label className="label-text">Search Product</label>
        <input
          name="search"
          type="text"
          className="input input-bordered input-sm"
          value={filters.search}
          onChange={handleChange}
        />
      </div>

      {/* CATEGORY */}
      <div className="flex flex-col">
        <label className="label-text">Select Category</label>
        <select
          name="category"
          className="select select-bordered select-sm"
          value={filters.category}
          onChange={handleChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* COMPANY */}
      <div className="flex flex-col">
        <label className="label-text">Select Company</label>
        <select
          name="company"
          className="select select-bordered select-sm"
          value={filters.company}
          onChange={handleChange}>
          {companies.map((com) => (
            <option key={com} value={com}>
              {com}
            </option>
          ))}
        </select>
      </div>

      {/* ORDER */}
      <div className="flex flex-col">
        <label className="label-text">Sort By</label>
        <select
          name="order"
          className="select select-bordered select-sm"
          value={filters.order}
          onChange={handleChange}>
          {orderOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* PRICE */}
      <div className="flex flex-col">
        <label className="label flex justify-between">
          <span>Price</span>
          <span>${filters.price / 100}</span>
        </label>
        <input
          name="price"
          type="range"
          min={0}
          max={100000}
          value={filters.price}
          onChange={handleChange}
          className="range range-primary range-sm"
        />
      </div>

      {/* SHIPPING */}
      <div className="flex flex-col items-center">
        <label className="label-text">Free Shipping</label>
        <input
          name="shipping"
          type="checkbox"
          className="checkbox checkbox-primary checkbox-sm"
          checked={filters.shipping === "on"}
          onChange={handleChange}
        />
      </div>

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm uppercase">
        Search
      </button>
      <button
        type="button"
        onClick={onReset}
        className="btn btn-accent btn-sm uppercase text-base-100">
        Reset
      </button>
    </form>
  );
};

export default Filters;
