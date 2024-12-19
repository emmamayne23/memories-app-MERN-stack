import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import API_URL from "../constants/constant";
const SignUpPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDeafult();
    try {
      const response = await axios.post(`${API_URL}/users/register`, {
        username,
        email,
        password,
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 py-10 rounded-lg shadow-md w-[300px]">
            <h2 className="text-2xl text-black font-bold text-center mb-6">Signup</h2>
            {/**<p className="mt-6 text-sm text-center my-2">
              or go to the{" "}
              <Link to="/home" className="text-primary hover:underline">
                homepage
              </Link>
            </p> */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="w-full py-2 mt-4 bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-primary"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-6 text-sm text-black text-center font-medium">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-blue-600 underline underline-offset-2 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
