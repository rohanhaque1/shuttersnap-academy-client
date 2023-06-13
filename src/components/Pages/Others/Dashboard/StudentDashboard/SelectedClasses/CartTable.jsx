import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartTable = ({ item, index, carts, setCarts }) => {
  const { photo, name, instructorName, price, _id } = item;

  const handleDeleteClass = (_id) => {
    Swal.fire({
      title: "Are you sure want to delete this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/carts/${_id}`)
          .then((res) => {
            const data = res.data;
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Toy has been deleted.", "success");
              const remaining = carts.filter((item) => item._id !== _id);
              setCarts(remaining);
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };

  return (
    <>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={photo} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{instructorName}</td>
      <td>$ {price}</td>
      <td>
        <button onClick={() => handleDeleteClass(_id)}>
          <FaTrash size={24} className="text-red-600" />
        </button>
      </td>
      <td>
        <button className="btn bg-yellow-700 hover:bg-yellow-800 text-white">
          Pay
        </button>
      </td>
    </>
  );
};

export default CartTable;
