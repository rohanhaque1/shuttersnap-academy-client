import React from "react";

const EnrolledClasses = () => {
  return (
    <div>
      <h2 className="text-xl font-bold my-4">My Enrolled Classes : </h2>

      <div>
        <div className="w-full bg-white shadow-xl rounded-lg">
          <img src="" className="w-full h-48 rounded-t-lg bg-gray-100" alt="" />
          <div className="p-4">
            <h3 className="text-2xl font-bold text-amber-800">
              {/* {cls.className} */}
            </h3>
            <h3 className="text-xl font-semibold">clsinstructorName</h3>
            <p className="text-lg font-semibold">
              Enrolled :
              <span className="text-gray-600">clsenrolledStudents</span>
            </p>
            <p className="text-gray-600 font-semibold">
              Available Seats : clsavailableSeats
            </p>
            <div className="flex gap-3 items-center">
              <p className="text-amber-800 font-semibold text-lg">clsreviews</p>
              <p>star icon</p>
              <p className="italic font-semibold text-gray-500">
                (clsnumReviews)
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">$ clsprice</p>

              <button className="btn bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg">
                Continue Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClasses;
