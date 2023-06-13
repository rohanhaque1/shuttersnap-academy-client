import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center my-20 space-y-4">
      <h3 className="text-pink-800 text-3xl font-bold border-b-4 border-pink-800 py-4 md:w-1/4 mx-auto">
        {heading}
      </h3>
      <p className="text-md font-semibold text-yellow-500">
        --- {subHeading} ---
      </p>
    </div>
  );
};

export default SectionTitle;