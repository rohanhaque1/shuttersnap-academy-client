import React from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Container from "../../../Shared/Container/Container";
import { Link } from "react-router-dom";
import Button from "../../../Shared/Button/Button";
import useClasses from "../../../../hooks/useClasses";
import ClassCard from "./ClassCard";

const PopularClass = () => {
  const [classes] = useClasses();
  const sortedClasses = classes.sort(
    (a, b) => b.enrolledStudents - a.enrolledStudents
  );
  const topSixClasses = sortedClasses.slice(0, 6);

  return (
    <section>
      <Container>
        <SectionTitle
          heading="Our Popular Classes"
          subHeading="Explore Our Popular Classes"
        ></SectionTitle>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="my-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {topSixClasses.map((item) => (
            <ClassCard key={item._id} item={item}></ClassCard>
          ))}
        </div>
        <Link to="/classes">
          <Button btnTitle="View All Classes"></Button>
        </Link>
      </Container>
    </section>
  );
};

export default PopularClass;
