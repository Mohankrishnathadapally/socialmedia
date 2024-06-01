import iphoneWithProfile from "../assets/images/iphone-with-profile.jpg";
import instagramLogo from "../assets/images/Logo-Instagram.png";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="logo md:block hidden">
          <img
            src={iphoneWithProfile}
            alt="no"
            srcset=""
            className="h-[600px] w-[600px"
          />
        </div>
        <div className="gap-y-2">
          <div className="border-gray-200 border-2 p-8 h-[400px] rounded-lg">
            <div className="logo flex justify-center">
              <img src={instagramLogo} alt="" srcset="" className="h-[100px]" />
            </div>
            <div className="form w-[300px]">
              <form>
                <div class="mb-5">
                  <input
                    type="text"
                    id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    required
                  />
                </div>
                <div class="mb-5">
                  <input
                    type="text"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                    required
                  />
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white w-full rounded-lg h-8">
                  Log in
                </button>
              </form>

              <div className="flex justify-center my-8">
                <button className="text-blue-800 rounded-lg font-semibold flex items-center gap-x-2">
                  <FaFacebook />
                  Log in with Facebook
                </button>
              </div>
            </div>
          </div>

          <div className="border-gray-200 border-2 p-8 h-[80px] rounded-lg my-4 flex items-center justify-center">
            <h1>
              Don't have an account?
              <Link to="/sign-up">
                <span className="mx-2 text-blue-500 font-semibold">
                  Sign up
                </span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;