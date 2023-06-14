import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const ClassDetails = ({ cls }) => {
  const [isDisable, setIsDisable] = useState(true);
  const {
    availableSeats,
    image,
    className,
    instructorName,
    enrolledStudents,
    reviews,
    numReviews,
    price,
    _id,
  } = cls;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (cartId) => {
    if (user) {
      axios
        .post(
          "https://shutter-snap-academy-server-rohanhaque1.vercel.app/carts",
          {
            cartId,
            name: className,
            photo: image,
            price,
            instructorName,
            email: user?.email,
          }
        )
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Class Selected Successfully...");
          }
        })
        .catch((error) => toast.error(error.message));
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div
      className={`w-full bg-white shadow-xl rounded-lg ${
        availableSeats === 0 ? "bg-red-400 text-white" : "bg-white"
      }`}
    >
      <img
        src={image}
        className="w-full h-48 rounded-t-lg bg-gray-100"
        alt=""
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold text-amber-800">{className}</h3>
        <h3 className="text-xl font-semibold">{instructorName}</h3>
        <p className="text-lg font-semibold">
          Enrolled :<span className="text-gray-600">{enrolledStudents}</span>
        </p>
        <p className="text-gray-600 font-semibold">
          Available Seats : {availableSeats}
        </p>
        <div className="flex gap-3 items-center">
          <p className="text-amber-800 font-semibold text-lg">{reviews}</p>
          <p>
            <Rating style={{ maxWidth: 90 }} value={reviews} readOnly />
          </p>
          <p className="italic font-semibold text-gray-500">({numReviews})</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">$ {price}</p>
          <Link>
            <div onClick={() => setIsDisable(isDisable)}>
              {availableSeats === 0 ? (
                <button
                  className="btn bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                  disabled={isDisable}
                >
                  Select
                </button>
              ) : (
                <button
                  onClick={() => handleSelect(_id)}
                  className="btn bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                  disabled={!isDisable}
                >
                  Select
                </button>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
