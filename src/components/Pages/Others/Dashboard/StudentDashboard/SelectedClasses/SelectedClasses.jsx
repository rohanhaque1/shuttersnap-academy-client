import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../../../../providers/AuthProvider";
import CartTable from "./CartTable";
import { toast } from "react-hot-toast";

const SelectedClasses = () => {
  const [carts, setCarts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(
        `https://shutter-snap-academy-server-rohanhaque1.vercel.app/carts?email=${user?.email}`
      )
      .then((res) => {
        const data = res.data;
        setCarts(data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold my-4">
        My Selected Classes : {carts.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-cyan-800 text-white text-md">
              <th>SL</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Enroll</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item, index) => (
              <tr
                className="dark:hover:bg-slate-600 hover:bg-stone-500 hover:text-white"
                key={item._id}
              >
                <CartTable
                  item={item}
                  index={index}
                  setCarts={setCarts}
                  carts={carts}
                ></CartTable>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
