import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";

const UserTable = ({ user, index, refetch }) => {
  const { name, role, saveUser, email, photo, _id } = user;

    // Make Admin
  const handleMakeAdmin = (id) => {
    axios
      .patch(`http://localhost:5000/users/admin/${id}`)
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount) {
          refetch();
          toast.success(`${name ? name : saveUser.name} is an Admin Now`);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

    // Make Instructor
  const handleMakeInstructor = (id) => {
    axios
      .patch(`http://localhost:5000/users/instructor/${id}`)
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount) {
          refetch();
          toast.success(`${name ? name : saveUser.name} is an Instructor Now`);
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
            <img
              src={photo ? photo : saveUser.photo}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      </td>
      <td className="text-amber-700 text-lg font-bold">
        {name ? name : saveUser.name}
      </td>
      <td className="text-gray-600 font-semibold italic">
        {email ? email : saveUser.email}
      </td>
      <td className="font-semibold">{role ? role : "Student"}</td>
      <td className="space-x-4">
        {role === "admin" ? (
          <button className="bg-gray-300 rounded-md py-3 px-4 text-gray-400">
            Admin
          </button>
        ) : (
          <button
            onClick={() => handleMakeAdmin(_id)}
            className="hover:bg-red-400 bg-red-600 py-3 px-4 rounded-md text-white"
          >
            Admin
          </button>
        )}
        {role === "instructor" ? (
          <button className="bg-gray-300 rounded-md py-3 px-4 text-gray-400">
            Instructor
          </button>
        ) : (
          <button
            onClick={() => handleMakeInstructor(_id)}
            className="hover:bg-orange-400 bg-orange-600 py-3 px-4 rounded-md text-white"
          >
            Instructor
          </button>
        )}
      </td>
    </>
  );
};

export default UserTable;
