import React from 'react';

const Refertemplate = ({ open, setOpen, success, setsuccess }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      {success.length > 0 ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">{success[0]}</span>
          <button type="button" onClick={() => setsuccess([])} className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="flex justify-around bg-sky-100 rounded-3xl w-full sm:w-4/6 lg:w-2/6 p-4 mt-4">
        <a href="#" className="text-black py-2 px-4 rounded hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Refer
        </a>
        <a href="#" className="text-black py-2 px-4 rounded hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Benefits
        </a>
        <a href="#" className="text-black py-2 px-4 rounded hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          FAQs
        </a>
        <a href="#" className="text-black py-2 px-4 rounded hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Support
        </a>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-between w-full sm:w-5/6 lg:w-3/6 h-4/6 border-slate-100 rounded-xl mt-4 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOwenlXcCDEPon7ikBcRkMZH1SVNNC0GLDfQ&s')" }}
      >
        <div className="flex flex-col justify-center w-full lg:w-3/6 h-full ml-4 lg:ml-4">
          <span className="text-black font-bold text-3xl lg:text-5xl">
            Let's Refer <br />
            & Earn
          </span>
          <span className="text-black text-lg lg:text-xl mt-4">
            Get a chance to win
            <br />
            up-to <span className="text-blue-700 text-2xl lg:text-3xl">Rs. 1500</span>
          </span>
          <button
            onClick={() => setOpen(true)}
            className="mt-4 w-4/6 sm:w-2/6 bg-blue-500 text-black font-bold py-2 px-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Refer Now
          </button>
        </div>
        <div className="hidden lg:block w-3/6"></div>
      </div>
    </div>
  );
};

export default Refertemplate;
