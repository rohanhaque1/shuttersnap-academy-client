import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    axios
      .get("https://shutter-snap-academy-server-rohanhaque1.vercel.app/myclass")
      .then((res) => {
        setFeedbacks(res.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);
  return (
    <div className="w-1/2">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-center font-semibold text-amber-700 text-lg my-2 underline">
          Your Feedbacks
        </h2>
        {feedbacks.map((feedback) => (
          <div key={feedback._id}>
            <h2 className="text-gray-500 font-semibold italic">
              {feedback.data.feedback}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
