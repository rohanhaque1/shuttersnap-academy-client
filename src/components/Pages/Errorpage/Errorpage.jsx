import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../../assets/error.jpg";

const Errorpage = () => {
  const { error } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          src={errorImg}
          className="w-1/3 h-1/2 rounded-full border-8 border-pink-800"
          alt=""
        />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600"></h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded-lg shadow-lg bg-teal-800 text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Errorpage;
