import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Moon, Sun, LucideShieldUser } from "lucide-react";
import "../App.css";

function NavLinks() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "winter" || storedTheme === "dracula"
      ? storedTheme
      : "winter";
  });
  const [user, setUser] = useState(null);

  const changeTheme = () => {
    const newTheme = theme === "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    console.log("Storage and DOM updated to:", theme);
  }, [theme]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }

    // Listen for logout events from other components
    const handleStorageChange = () => {
      const user = localStorage.getItem("user");
      setUser(user ? JSON.parse(user) : null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="bg-base-200">
      <div className="mx-auto! max-w-6xl px-8! py-2! flex justify-between items-center min-h-16 w-full">
        <div
          className={`bg-primary hover:brightness-88  duration-300 ease-in border-[0.8px] border-solid border-primary rounded-lg px-4! nav-links-logo cursor-pointer`}>
          <Link to={"/"}>
            <p className="uppercase text-[#dbe1ff] text-3xl leading-[46.4px] ">
              C
            </p>
          </Link>
        </div>
        <div>
          <ul className="flex">
            <li>
              <NavLink to={"/"} className="text-[14px]/[20px] py-2! px-4!">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/About"} className="text-[14px]/[20px] py-2! px-4!">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Products"}
                className="text-[14px]/[20px] py-2! px-4!">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Cart"} className="text-[14px]/[20px] py-2! px-4!">
                Cart
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to={"/checkout"}
                  className="text-[14px]/[20px] py-2! px-4!">
                  Checkout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center">
          <div>
            <button
              className="cursor-pointer"
              aria-label="Toggle theme"
              onClick={changeTheme}>
              {theme === "winter" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          <div className="ml-4!">
            <Link to={"Cart"}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavLinks;
