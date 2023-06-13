import React, { useEffect, useState } from "react";
import SharedBanner from "../../../Shared/SharedBanner/SharedBanner";
import instructorImg1 from "../../../../assets/Instructors/instructor1.jpg";
import instructorImg2 from "../../../../assets/Instructors/instructor2.jpg";
import instructorImg3 from "../../../../assets/Instructors/instructor3.jpg";
import { BsFillCameraReelsFill } from "react-icons/bs";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Container from "../../../Shared/Container/Container";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useClasses from "../../../../hooks/useClasses";

const Instructors = () => {
  const [classes] = useClasses();

  return (
    <>
      <SharedBanner
        icons={<BsFillCameraReelsFill size={48} />}
        title="Capturing Moments Through Expert Guidance"
        paragraph="Experience the art of photography like never before with our talented instructors who inspire, educate, and empower you to unleash your creative vision. Join us today!"
        img1={instructorImg1}
        img2={instructorImg2}
        img3={instructorImg3}
      ></SharedBanner>
      <Container>
        <section data-aos="fade-up" data-aos-duration="3000" className="my-32">
          <SectionTitle
            heading="Inspiring Photography Experts"
            subHeading="Meet the Masters Behind the Lens"
          ></SectionTitle>
          <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((instructor) => (
              <>
                <div
                  key={instructor._id}
                  className="w-full bg-white shadow-xl rounded-lg"
                >
                  <img
                    src={instructor.instructorPhoto}
                    className="w-full h-96 object-cover rounded-t-lg bg-gray-100"
                    alt=""
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-amber-800">
                      {instructor.instructorName}
                    </h3>
                    <p className="text-gray-500 text-md font-semibold italic">
                      {instructor.instructorEmail}
                    </p>
                    <h3 className="text-xl font-semibold">
                      {instructor.className}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3 items-center">
                        <p className="text-amber-800 font-semibold text-lg">
                          {instructor.reviews}
                        </p>
                        <p>
                          <Rating
                            style={{ maxWidth: 90 }}
                            value={instructor.reviews}
                            readOnly
                          />
                        </p>
                        <p className="italic font-semibold text-gray-500">
                          ({instructor.numReviews})
                        </p>
                      </div>
                      <div>
                        <Link>
                          <button className="btn bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg">
                            See Classes
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};

export default Instructors;
