import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "User Login Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.code.slice(5, 50),
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  };
  return (
    <div>
      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
        <a className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
          or login with Social Media
        </a>
        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
      </div>
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="self-center px-8 py-2 font-semibold rounded bg-violet-600 flex items-center justify-center"
        >
          <span className="mx-2">Continue With Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
