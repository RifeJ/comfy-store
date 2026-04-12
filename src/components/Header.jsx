import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <div className="bg-neutral text-neutral-content">
      <div className="flex gap-x-6 justify-end items-center py-2 px-8 mx-auto max-w-6xl">
        <Link to={"/login"}>
          <p className=" text-[14px]/[20px] hover:underline cursor-pointer">
            Sign in / Guest{" "}
          </p>
        </Link>
        <Link to={"Register"}>
          <p className=" text-[14px]/[20px] hover:underline cursor-pointer">
            Create Account
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
