import React from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Container from "../../../Shared/Container/Container";
import { Link } from "react-router-dom";
import Button from "../../../Shared/Button/Button";
import useClasses from "../../../../hooks/useClasses";
import InsturctorCard from "./InsturctorCard";

const PopularInstructors = () => {
  const [classes] = useClasses();
  const sortedInstructors = classes.sort(
    (a, b) => b.enrolledStudents - a.enrolledStudents
  );
  const topSixInstructors = sortedInstructors.slice(0, 6);

  return (
    <div>
      <Container>
        <SectionTitle
          heading="Our Popular Instructors"
          subHeading="Explore Our Best Seller Instructors"
        ></SectionTitle>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="my-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {topSixInstructors.map((instructor) => (
            <InsturctorCard
              key={instructor._id}
              instructor={instructor}
            ></InsturctorCard>
          ))}
        </div>
        <Link to="/instructors">
          <Button btnTitle="View All Instructors"></Button>
        </Link>
      </Container>
    </div>
  );
};

export default PopularInstructors;
