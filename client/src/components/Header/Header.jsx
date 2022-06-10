import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { UserAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <header className="absolute w-full px-4 pt-4">
      <div className="flex justify-between items-center text-white max-w-7xl mx-auto">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10" />
        </Link>
        <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="bg-red-600 rounded font-medium px-2 py-1 ml-4"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link to="/signin" className="font-medium">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-red-600 rounded font-medium px-2 py-1 ml-4"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
