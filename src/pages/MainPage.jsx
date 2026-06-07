import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedProducts } from "../services/axios";
import { Link } from "react-router";
import LoadingSpiner from "../components/LoadingSpiner";
import ServerErrorBlock from "../components/ServerErrorBlock";
import carouselImg1 from "../assets/hero1-deae5a1f.webp";
import carouselImg2 from "../assets/hero2-2271e3ad.webp";
import carouselImg3 from "../assets/hero3-a83f0357.webp";
import carouselImg4 from "../assets/hero4-4b9de90e.webp";

function MainPage() {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["FeaturedProducts"],
    queryFn: fetchFeaturedProducts,
  });

  if (isLoading) return <LoadingSpiner />;
  if (error) return <ServerErrorBlock />;

  return (
    <section className="py-20! px-8! mx-auto! max-w-6xl">
      <div className="grid grid-cols-2 gap-24 items-center max-lg:grid-cols-1">
        <div>
          <h1 className="max-w-2xl text-6xl font-bold tracking-tight">
            We are changing the way people shop
          </h1>
          <p className="mt-8! max-w-xl text-lg leading-8">
            Design your dream space with our premium selection of furniture.
            From elegant sofas to handcrafted tables, we offer quality pieces
            that combine style, durability, and unmatched comfort.
          </p>
          <Link to={"Products"}>
            <button className="bg-primary hover:brightness-88 duration-300 ease-in border-[0.8px] border-solid border-primary rounded-lg  cursor-pointer py-2! px-4! mt-10! nav-links-logo">
              <p className="uppercase text-white">our products</p>
            </button>
          </Link>
        </div>
        <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4 h-112 max-lg:hidden">
          <div className="carousel-item flex-none">
            <img
              src={carouselImg1}
              className="rounded-box w-80 h-full object-cover"
              alt="furniture 1"
            />
          </div>

          <div className="carousel-item flex-none">
            <img
              src={carouselImg2}
              className="rounded-box w-80 h-full object-cover"
              alt="furniture 2"
            />
          </div>

          <div className="carousel-item flex-none">
            <img
              src={carouselImg3}
              className="rounded-box w-80 h-full object-cover"
              alt="furniture 3"
            />
          </div>

          <div className="carousel-item flex-none">
            <img
              src={carouselImg4}
              className="rounded-box w-80 h-full object-cover"
              alt="furniture 4"
            />
          </div>
        </div>
      </div>
      <div className="pt-24!">
        <div className="border-b border-base-300 pb-5!">
          <h1 className="text-3xl font-medium tracking-wider capitalize">
            featured products
          </h1>
        </div>
        <div className="pt-12! grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4">
          {products.map((product) => {
            const { _id, title, price, image } = product;

            const dollarsAmount = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price / 100);

            return (
              <Link
                key={_id}
                to={`/Products/${_id}`}
                className="rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
                <figure className="px-4 pt-4">
                  <img
                    src={image}
                    alt={title}
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body p-8! items-center text-center">
                  <h2 className="text-[20px]/[28px] font-semibold capitalize tracking-wider">
                    {title}
                  </h2>
                  <span className="font-medium">{dollarsAmount}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MainPage;
