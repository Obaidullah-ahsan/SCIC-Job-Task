import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="p-3 bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between mx-auto">
        <h2 className="text-2xl font-bold">Logo</h2>
        <div className="items-center flex-shrink-0 flex gap-2">
          <Link to="/login" className="self-center px-8 py-2 font-semibold rounded bg-violet-600 dark:text-gray-50">
            Login
          </Link>
          <Link to="/register" className="self-center px-8 py-2 font-semibold rounded bg-violet-600 dark:text-gray-50">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
