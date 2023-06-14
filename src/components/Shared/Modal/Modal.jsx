import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Modal = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(
        "https://shutter-snap-academy-server-rohanhaque1.vercel.app/myclass",
        { data }
      )
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Send Feedback to the Instructor Successfully...");
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <div className="">
          <h1>Send Feedback</h1>
          <div className="divider"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <textarea
                className="border-2 w-full resize-none p-6"
                placeholder="Write Your Feedback"
                {...register("feedback", { required: true })}
                rows="8"
              ></textarea>
            </div>
            <button className="w-full bg-zinc-700 hover:bg-zinc-800 text-white p-3 my-3 rounded-lg shadow-lg">
              Send Feedback
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
