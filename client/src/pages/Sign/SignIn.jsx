import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/browse");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <section className="bg-hero-image bg-center bg-cover text-white h-screen">
      <div className="flex flex-col justify-center items-center gap-4 bg-neutral-900/50 w-full h-full">
        <div className="bg-black/75 rounded w-full max-w-md px-16 py-12">
          <h1 className="font-bold text-4xl">Sign In</h1>
          {error && <span className="text-red-500">{error}</span>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-700 rounded text-lg px-2 py-1"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-neutral-700 rounded text-lg px-2 py-1"
            />
            <button className="bg-red-600 rounded font-medium text-xl mt-4 px-2 py-1">
              Sign In
            </button>
          </form>
          <h2 className="text-white/75 mt-4">
            New to Netflix?{" "}
            <Link to="/signup" className="text-white">
              Sign up now
            </Link>
            .
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
