import React from "react";
import ManageTable from "./ManageTable";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["myclass"], async () => {
    const res = await fetch(
      "https://shutter-snap-academy-server-rohanhaque1.vercel.app/myclass"
    );
    return res.json();
  });

  return (
    <div className="w-9/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-cyan-800 text-white">
              <th>SL</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr
                key={cls._id}
                className="bg-white hover:bg-gray-400 hover:text-white"
              >
                <ManageTable
                  cls={cls}
                  index={index}
                  refetch={refetch}
                ></ManageTable>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
