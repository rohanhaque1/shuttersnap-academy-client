import React from "react";
import Container from "../Container/Container";

const SharedBanner = ({ icons, title, paragraph, img1, img2, img3 }) => {
  return (
    <div className="my-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="mx-14 space-y-3">
            <div className="text-pink-800">{icons}</div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-amber-600  sm:leading-none">
                {title} ---!!
              </h2>
              <p className="text-gray-600 dark:text-white text-lg font-semibold">
                {paragraph}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={img1}
                alt="image1"
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={img2}
                alt="image2"
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={img3}
                alt="image3"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SharedBanner;
