import instagramLogo from "../assets/images/Logo-Instagram.png";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Signup() {
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/");
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center my-3">
      <div className="">
        <div className="border-gray-200 border-2 px-6 h-[540px] rounded-lg">
          <div className="logo flex justify-center">
            <img
              src={instagramLogo}
              alt="Instagram Logo"
              className="h-[100px]"
            />
          </div>
          <div className="text-center">
            <h1 className="text-slate-500 font-semibold">
              Sign up to see photos and videos
              <br />
              from your friends.
            </h1>
          </div>

          <button className="text-white hover:bg-blue-600 bg-blue-500 rounded-lg font-semibold flex items-center gap-x-2 h-9 w-full justify-center my-3">
            <FaFacebook />
            Log in with Facebook
          </button>

          <div className="form w-[300px] my-4">
            <form>
              <div className="mb-2">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Firstname"
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Lastname"
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white w-full rounded-lg h-8 my-4"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="border-gray-200 border-2 p-8 h-[80px] rounded-lg my-4 flex items-center justify-center">
          <h1>
            Have an account?
            <Link to="/">
              <span className="mx-2 text-blue-500 font-semibold">Sign in</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Signup;