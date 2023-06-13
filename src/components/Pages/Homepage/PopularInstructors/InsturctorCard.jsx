import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const InsturctorCard = ({ instructor }) => {
  const {
    instructorPhoto,
    instructorName,
    className,
    reviews,
    numReviews,
    _id,
  } = instructor;

  return (
    <div className="w-full bg-white shadow-xl rounded-lg">
      <img
        src={instructorPhoto}
        className="w-full h-96 object-cover rounded-t-lg bg-gray-100"
        alt=""
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold text-amber-800">
          {instructorName}
        </h3>
        <h3 className="text-xl font-semibold">{className}</h3>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <p className="text-amber-800 font-semibold text-lg">
              {reviews}
            </p>
            <p>
              <Rating
                style={{ maxWidth: 90 }}
                value={reviews}
                readOnly
              />
            </p>
            <p className="italic font-semibold text-gray-500">
              ({numReviews})
            </p>
          </div>
          <div>
            <Link>
              <button className="btn bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg">
                See Classes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsturctorCard;
