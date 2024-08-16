import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <header className="p-3 bg-slate-200 dark:text-gray-800">
      <div className="container flex justify-between mx-auto">
        <Link to="/">
          <h2 className="text-2xl font-bold pl-4">UrbanCart</h2>
        </Link>
        {user ? (
          <div className="flex gap-2">
            <img
              src={user?.photoURL}
              alt=""
              className="w-12 h-12 border rounded-full"
            />
            <button
              onClick={handleLogout}
              className="self-center px-8 py-2 font-semibold rounded bg-violet-600 dark:text-gray-50"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="items-center flex-shrink-0 flex gap-2">
            <Link
              to="/login"
              className="self-center px-8 py-2 font-semibold rounded bg-violet-600 dark:text-gray-50"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="self-center px-8 py-2 font-semibold rounded bg-violet-600 dark:text-gray-50"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
