import React from "react";
import SharedBanner from "../../../Shared/SharedBanner/SharedBanner";
import classImg1 from "../../../../assets/Classes/class1.jpg";
import classImg2 from "../../../../assets/Classes/class2.jpg";
import classImg3 from "../../../../assets/Classes/class3.jpg";
import { BsCameraFill } from "react-icons/bs";
import Container from "../../../Shared/Container/Container";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import useClasses from "../../../../hooks/useClasses";
import ClassDetails from "./ClassDetails";

const Classes = () => {
  const [classes] = useClasses();

  return (
    <>
      <SharedBanner
        icons={<BsCameraFill size={48} />}
        title="Unleash Your Creativity Through Photography"
        paragraph="Join our photography classes and embark on a transformative journey to develop your skills, unleash your creativity, and capture breathtaking moments that last a lifetime. Enroll today!"
        img1={classImg1}
        img2={classImg2}
        img3={classImg3}
      ></SharedBanner>
      <Container>
        <section data-aos="fade-up" data-aos-duration="3000" className="my-32">
          <SectionTitle
            heading="Expand Your Vision through Photography Classes"
            subHeading="Discover Your Passion for Photography with Our Class Selection"
          ></SectionTitle>
          <div className="my-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <ClassDetails key={cls._id} cls={cls}></ClassDetails>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};

export default Classes;
