import React from "react";
import { Link } from "react-router-dom";

const MyClassTable = ({ myClass, index }) => {
  const {
    _id, data, status
  } = myClass;
  return (
    <>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={data.classImage} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{data.className}</td>
      <td>{data.instructorName}</td>
      <td>{data.instructorEmail}</td>
      <td>{data.availableSeats}</td>
      <td>${data.price}</td>
      <td>Total enroll</td>
      <td>{status ? status : 'Pending'}</td>
      <td>update</td>
      <td>
        <Link to={`/dashboard/feedback/${_id}`}>
          <button className="bg-red-600 hover:bg-red-400 rounded px-3 py-2 text-white">
            Feedback
          </button>
        </Link>
      </td>
    </>
  );
};

export default MyClassTable;
