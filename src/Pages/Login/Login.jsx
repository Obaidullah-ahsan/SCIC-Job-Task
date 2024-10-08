import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Success!",
            text: "User Login Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
          navigate("/");
        }
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: error.code.slice(5, 50),
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full px-6 py-8 md:px-8 lg:w-2/5">
        <h2 className="text-center mx-auto text-2xl font-bold">Login Now!</h2>
        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Email Address
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Password (6+ characters)
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Enter your password"
              name="password"
              required
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>
        <SocialLogin></SocialLogin>
        <p className="mt-8 text-sm font-light text-center text-gray-400">
          {" "}
          Dont have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
