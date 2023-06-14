import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageTable = ({ cls, index, refetch }) => {
  const { _id, data, status } = cls;

  const handleApprove = (id) => {
    axios
      .patch(
        `https://shutter-snap-academy-server-rohanhaque1.vercel.app/myclass/approve/${id}`
      )
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount) {
          refetch();
          toast.success("The Class has Approved Now");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleDeny = (id) => {
    axios
      .patch(
        `https://shutter-snap-academy-server-rohanhaque1.vercel.app/myclass/deny/${id}`
      )
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount) {
          refetch();
          toast.success("The Class has Denyed Now");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
      <td>{status ? status : "Pending"}</td>
      <td className="space-x- flex gap-3">
        {status === "approved" ? (
          <button className="bg-gray-300 rounded-md py-3 px-4 text-gray-400">
            Approve
          </button>
        ) : (
          <button
            onClick={() => handleApprove(_id)}
            className="hover:bg-red-400 bg-red-600 py-3 px-4 rounded-md text-white"
          >
            Approve
          </button>
        )}
        {status === "denyed" ? (
          <button className="bg-gray-300 rounded-md py-3 px-4 text-gray-400">
            Deny
          </button>
        ) : (
          <button
            onClick={() => handleDeny(_id)}
            className="hover:bg-orange-400 bg-orange-600 py-3 px-4 rounded-md text-white"
          >
            Deny
          </button>
        )}

        <Link to={`/dashboard/modal/${_id}`}>
          <button className="hover:bg-orange-400 bg-orange-600 py-3 px-4 rounded-md text-white">
            Send Feedback
          </button>
        </Link>
      </td>
    </>
  );
};

export default ManageTable;
