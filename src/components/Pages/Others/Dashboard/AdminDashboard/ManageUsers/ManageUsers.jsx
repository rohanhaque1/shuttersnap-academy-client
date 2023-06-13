import { useQuery } from "@tanstack/react-query";
import React from "react";
import UserTable from "./UserTable";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  return (
    <div>
      <h2 className="text-xl font-bold my-4">Total Users : {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="bg-cyan-800 text-white text-md">
              <th>SL</th>
              <th>User Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Current Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <UserTable
                  index={index}
                  user={user}
                  refetch={refetch}
                ></UserTable>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
