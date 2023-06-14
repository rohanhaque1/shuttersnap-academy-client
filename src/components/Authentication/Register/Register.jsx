import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import { useForm } from "react-hook-form";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [eyeOneOpen, setEyeOneOpen] = useState(false);
  const [eyeTwoOpen, setEyeTwoOpen] = useState(false);
  const { createUser, userProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        userProfile(data.name, data.photo).then(() => {
          axios
            .post(
              "https://shutter-snap-academy-server-rohanhaque1.vercel.app/users",
              {
                name: data.name,
                email: data.email,
                photo: data.photo,
                phone: data.phone,
                address: data.address,
                gender: data.gender,
              }
            )
            .then((res) => {
              const data = res.data;
              if (data.insertedId) {
                toast.success("User Created Successfully ...!!");
                navigate(from, { replace: true });
                reset();
              }
            })
            .catch((error) => toast.error(error.message));
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-slate-500 md:w-10/12 mx-auto my-6 p-5 md:p-10 rounded-lg shadow-lg">
      <Container>
        <h1 className="text-4xl font-bold uppercase text-center text-white">
          Create New Account !!
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-10/12 mx-auto my-16 p-8 space-y-3 bg-white shadow-lg rounded-lg"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-lg font-bold">
                <span className="">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
              />
            </div>
            <div>
              <label className="text-lg font-bold">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                {...register("email", { required: true })}
                className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-800 font-semibold">Email is required</p>
              )}
            </div>
            <div>
              <label className="text-lg font-bold">
                <span className="">Password</span>
              </label>
              <div className="flex justify-between items-center relative">
                {eyeOneOpen ? (
                  <>
                    <input
                      type="text"
                      placeholder="********"
                      {...register("password", {
                        required: true,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{6}/,
                      })}
                      className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="password"
                      placeholder="********"
                      {...register("password", {
                        required: true,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{6}/,
                      })}
                      className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
                    />
                  </>
                )}

                <div
                  onClick={() => setEyeOneOpen(!eyeOneOpen)}
                  className="absolute right-2"
                >
                  {eyeOneOpen ? (
                    <BsEyeSlashFill size={30} />
                  ) : (
                    <BsEyeFill size={30} />
                  )}
                </div>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-800 font-semibold">
                  Password is required.
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-800 font-semibold">
                  Password should be at least 6 characters, One Uppercase and
                  One special Characters.
                </p>
              )}
            </div>
            <div>
              <label className="text-lg font-bold">
                <span className="">Confirm Password</span>
              </label>
              <div className="flex justify-between items-center relative">
                {eyeTwoOpen ? (
                  <input
                    type="text"
                    placeholder="********"
                    {...register("confirm", {
                      required: true,
                      validate: (value) => value === getValues().password,
                    })}
                    className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
                  />
                ) : (
                  <input
                    type="password"
                    placeholder="********"
                    {...register("confirm", {
                      required: true,
                      validate: (value) => value === getValues().password,
                    })}
                    className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
                  />
                )}
                <div
                  onClick={() => setEyeTwoOpen(!eyeTwoOpen)}
                  className="absolute right-2"
                >
                  {eyeTwoOpen ? (
                    <BsEyeSlashFill size={30} />
                  ) : (
                    <BsEyeFill size={30} />
                  )}
                </div>
              </div>
              {errors.confirm && (
                <p className="text-red-800 font-semibold">
                  The passwords do not match.
                </p>
              )}
            </div>
            <div>
              <label className="text-lg font-bold">
                <span className="">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                {...register("photo")}
                className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
              />
            </div>
            <div>
              <label className="text-lg font-bold">
                <span className="">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Phone number"
                {...register("phone")}
                className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
              />
            </div>
            <div>
              <label className="text-lg font-bold">
                <span className="">Gender</span>
              </label>
              <select
                {...register("gender")}
                className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-lg font-bold">
                <span className="">Address</span>
              </label>
              <input
                type="text"
                placeholder="Your address"
                {...register("address")}
                className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
              />
            </div>
          </div>

          <div>
            <button className="w-full btn bg-pink-800 hover:bg-pink-900 border-0 text-white p-3 rounded-lg font-bold">
              Register
            </button>
          </div>

          <div className="text-md text-center text-gray-600 font-bold">
            <p>
              Already have an Account ?
              <Link to="/login" className="text-teal-600">
                Login
              </Link>
            </p>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Register;
