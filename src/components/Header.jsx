import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    setUser(null);
    window.location.reload();
  };

  return (
    <div className="bg-neutral text-neutral-content">
      <div className="flex gap-x-6 justify-end items-center py-2 px-8 mx-auto max-w-6xl">
        {user ? (
          <>
            <p className="text-[14px]/[20px]">Hello, {user.username}</p>
            <button
              onClick={handleLogout}
              className="text-[13px]/[20px] text-primary font-medium hover:underline cursor-pointer border border-primary rounded-[10px] py-0.5 px-2 hover:bg-primary hover:text-neutral">
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <p className="text-[14px]/[20px] hover:underline cursor-pointer">
                Sign in / Guest
              </p>
            </Link>
            <Link to={"/register"}>
              <p className="text-[14px]/[20px] hover:underline cursor-pointer">
                Create Account
              </p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
