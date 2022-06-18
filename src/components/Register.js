import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alerts } from "./Alerts";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email already in use");
      }
      if (error.code === "auth/invalid-email") {
        setError("Invalid email");
      }
      if (error.code === "auth/weak-password") {
        setError("Password is too weak");
      }
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alerts message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-100 text-black border border-gray-300 dark:border-blue-500 dark:bg-slate-900 dark:text-white transition duration-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-sm font-fold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="yourmail@company.com"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-fold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-blue-500 text-sm hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </form>

      <p className="my-4 text-sm px-3">
        Already have an account?{" "}
        <Link className="underline hover:no-underline" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}
