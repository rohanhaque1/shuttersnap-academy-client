import React from 'react';

const Button = ({btnTitle}) => {
    return (
      <>
        <div className="text-center my-10">
          <button className="btn bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg">
            {btnTitle}
          </button>
        </div>
      </>
    );
};

export default Button;