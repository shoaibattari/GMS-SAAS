import React, { useState, useMemo, useContext } from "react";
import UserViewHero from "./UserViewHero";
import { Link } from "react-router-dom";

const CategoryView = ({ category }) => {
  const graveyardOptions = useMemo(
    () => [
      { value: "hubriver1", label: "Hub River 1" },
      { value: "hubriver2", label: "Hub River 2" },
      { value: "hubriver3", label: "Hub River 3" },
    ],
    []
  );

  const khundiOptions = useMemo(
    () => [
      { value: "jakhura", label: "Jakhura" },
      { value: "sindhi", label: "Sindhi" },
      { value: "punjabi", label: "Punjabi" },
    ],
    []
  );

  return (
    <div>
      <UserViewHero section={category} />

      {category === "grave" ? (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {graveyardOptions?.map((grave) => (
            <Link
              to={`${grave?.value}`}
              key={grave.value}
              className="bg-gradient-to-br from-red-600 to-red-400 p-4 py-12 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-white text-center">
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
              className="bg-gradient-to-br from-red-600 to-red-400 p-4 py-12 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-white text-center">
                {khundi.label}
              </h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryView;
