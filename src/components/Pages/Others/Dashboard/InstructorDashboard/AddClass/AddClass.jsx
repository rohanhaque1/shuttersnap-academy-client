import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../../providers/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post(
        "https://shutter-snap-academy-server-rohanhaque1.vercel.app/myclass",
        {
          data,
        }
      )
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Class Added Successfully...");
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <h2 className="text-3xl text-amber-600 font-bold">Add a Class</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-1/2 mx-auto my-16 p-8 space-y-3 bg-white dark:bg-slate-400 dark:text-black shadow-lg rounded-lg"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-lg font-bold">
              <span className="">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("className", { required: true })}
              className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
            />
          </div>
          <div>
            <label className="text-lg font-bold">
              <span className="">Class Image</span>
            </label>
            <input
              type="text"
              placeholder="Class Image"
              {...register("classImage", { required: true })}
              className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
            />
          </div>
          <div>
            <label className="text-lg font-bold">
              <span className="">Instructor Name</span>
            </label>
            <input
              type="text"
              placeholder="Instructor Name"
              defaultValue={user?.displayName}
              {...register("instructorName", { required: true })}
              className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
            />
          </div>
          <div>
            <label className="text-lg font-bold">
              <span className="">Instructor Email</span>
            </label>
            <input
              type="email"
              placeholder="Instructor Email"
              defaultValue={user?.email}
              {...register("instructorEmail", { required: true })}
              className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
            />
          </div>
          <div>
            <label className="text-lg font-bold">
              <span className="">Available seats</span>
            </label>
            <input
              type="text"
              placeholder="Available seats"
              {...register("availableSeats", { required: true })}
              className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
            />
          </div>
          <div>
            <label className="text-lg font-bold">
              <span className="">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              {...register("price", { required: true })}
              className="w-full border-2 font-bold text-gray-700 border-pink-800 rounded-lg p-3"
            />
          </div>
        </div>
        <div>
          <button className="w-full bg-zinc-700 hover:bg-zinc-800 text-white p-3 my-3 rounded-lg shadow-lg">
            Add Class
          </button>
        </div>
      </form>
    </>
  );
};

export default AddClass;
