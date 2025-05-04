import React, { useState, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import { graveyardOptions, khundiOptions } from "../../assets/constant";

const CategoryView = ({ category }) => {
  
 

  return (
    <div
      style={{
        background:
          "radial-gradient(61.05% 50.86% at 50% 46.33%, #F15050 0%, #850C0C 100%)",
      }}
      className="py-20 text-center flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 md:w-[50%] ">
        <h1 className="text-p leading-7 md:leading-14 md:text-6xl  text-white mb-4 font-medium ">
          WellCome To
          <span className="gradient-text"> {category} Record Portal</span>
        </h1>
        <p className="text-lg text-white text-balance font-medium">
          Search and view grave records by name, number, location, or khundi.
          This system helps you easily locate loved ones.
        </p>
      </div>
      {/* <UserViewHero section={category} /> */}
      <div className="w-[80%] mx-auto">
        {category === "grave" ? (
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {graveyardOptions?.map((grave) => (
              <Link
                to={`${grave?.value}`}
                key={grave.value}
                className="bg-gradient-to-br from-red-600 to-red-400 p-4 md:py-12 rounded-3xl"
              >
                <h3 className="text-p md:text-h4 font-bold text-white text-center">
                  {grave.label}
                </h3>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {khundiOptions?.map((khundi) => (
              <Link
                to={`${khundi?.value}`}
                key={khundi.value}
                className="bg-gradient-to-br from-red-600 to-red-400 p-4 md:py-12 rounded-3xl"
              >
                <h3 className="text-p md:text-h4 font-bold text-white text-center">
                  {khundi.label}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryView;
