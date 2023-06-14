import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import MyClassTable from "./MyClassTable";

const MyClass = () => {
  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    axios
      .get("https://shutter-snap-academy-server-rohanhaque1.vercel.app/myclass")
      .then((res) => {
        const data = res.data;
        setMyClasses(data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);

  return (
    <div className=" w-9/12 mx-auto">
      <h2 className="text-2xl text-amber-600 font-bold my-4">
        My Classes : {myClasses.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-cyan-800 text-white text-md">
              <th>SL</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Total Enrolled</th>
              <th>Status</th>
              <th>update</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((myClass, index) => (
              <tr
                key={myClass._id}
                className="bg-white text-black dark:hover:bg-slate-600 dark:hover:text-white"
              >
                <MyClassTable myClass={myClass} index={index}></MyClassTable>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
