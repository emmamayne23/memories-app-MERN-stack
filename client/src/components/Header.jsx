import memories from "../assets/images/memories.png";
import { Link, useLocation } from "react-router-dom";


import { useAuthStore } from "../store/auth";

const Header = () => {
  const { user, logout } = useAuthStore();

  const location = useLocation();
  const nameOfUser = location.state?.name;

  return (
    <>
      {/* Header */}
      <div className="flex justify-between my-5 mx-auto w-[95%] bg-gradient-to-r from-emerald-800 to-cyan-800 rounded-lg p-4 py-2">
        <div className="flex items-center justify-center mr-10 ml-2">
          <p className="lg:text-4xl md:text-3xl text-2xl text-white font-bold mr-3">MEMORIES</p>
          <img src={memories} alt="memories logo" className="w-12 h-12" />
        </div>
        <div className=" flex flex-col items-center justify-center md:flex-row">
        <span className="font-medium mr-3">{nameOfUser}</span>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="font-semibold">Welcome, {user.name}</span>
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/sign-in">
            <button
            className="bg-blue-500 px-4 py-2 rounded font-medium hover:bg-blue-600"
          >
            Sign In
          </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
