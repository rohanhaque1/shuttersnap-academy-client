import React, { useContext } from "react";
import Container from "../../Shared/Container/Container";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        toast.success("User Login Successful .. !");
        navigate(from, { replace: true });
        reset();
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        axios
          .post("http://localhost:5000/users", {
            name: loggedUser.displayName,
            email: loggedUser.email,
            photo: loggedUser.photoURL,
          })
          .then(() => {
            toast.success("User Login Successful ..!!");
            navigate(from, { replace: true });
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="bg-slate-500 md:w-10/12 mx-auto my-6 p-5 md:p-10 rounded-lg shadow-lg">
      <Container>
        <h1 className="text-4xl font-bold uppercase text-center text-white">
          Login Now !!
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-1/2 mx-auto my-16 p-8 space-y-3 bg-white shadow-lg rounded-lg"
        >
          <div>
            <label className="text-lg font-bold">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              {...register("email")}
              className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
            />
          </div>
          <div>
            <label className="text-lg font-bold">
              <span className="">Password</span>
            </label>
            <input
              type="password"
              placeholder="********"
              {...register("password")}
              className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
            />
          </div>
          <div>
            <button className="w-full btn bg-pink-800 hover:bg-pink-900 border-0 text-white p-3 rounded-lg font-bold">
              Login
            </button>
          </div>

          <div
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer text-center w-full mx-auto rounded-lg"
          >
            <FcGoogle size={32} />
            <p className="font-bold">Continue with Google</p>
          </div>
          <div className="text-md text-center text-gray-600 font-bold">
            <p>
              Don't have any Account ?
              <Link to="/register" className="text-teal-600">
                Register
              </Link>
            </p>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
