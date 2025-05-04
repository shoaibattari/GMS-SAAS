import React, { useContext, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SearchBar from "../common/SearchBar";
import GraveContext from "../../context/GraveContext";
import { graveyardOptions, khundiOptions } from "../../assets/constant";

const SubCategory = () => {
  const { subCategory } = useParams();
  const { pathname } = useLocation();
  const { graves } = useContext(GraveContext);

  const [search, setSearch] = useState("");
  const [graveyard, setGraveyard] = useState(null);
  const [khundi, setKhundi] = useState(null);

  // Determine type based on pathname
  const isGravePath = pathname.includes("/grave/");
  const isKhundiPath = pathname.includes("/khundi/");

  const displayGraves = useMemo(() => {
    return graves.filter((grave) => {
      const matchesSubCategory = isGravePath
        ? grave.Graveyard === subCategory
        : isKhundiPath
        ? grave.KHUNDI === subCategory
        : true;

      const matchesSearch = search
        ? grave.Name.toLowerCase().includes(search.toLowerCase())
        : true;
      const matchesGraveyard = graveyard ? grave.Graveyard === graveyard : true;
      const matchesKhundi = khundi ? grave.KHUNDI === khundi : true;

      return (
        matchesSubCategory &&
        matchesSearch &&
        matchesGraveyard &&
        matchesKhundi
      );
    });
  }, [subCategory, isGravePath, isKhundiPath, search, graveyard, khundi, graves]);

  return (
    <div
      style={{
        background:
          "radial-gradient(61.05% 50.86% at 50% 46.33%, #F15050 0%, #850C0C 100%)",
      }}
      className="py-20 text-center flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 md:w-[50%] ">
        <h1 className="text-p leading-7 md:leading-14 md:text-6xl text-white mb-4 font-medium">
          Welcome To
          <span className="gradient-text"> {subCategory} Record Portal</span>
        </h1>
        <p className="text-lg text-white text-balance font-medium">
          Search and view grave records by name, number, location, or khundi.
          This system helps you easily locate loved ones.
        </p>
      </div>

      <div className="container mx-auto px-4 w-[80%]">
        <SearchBar
          graveShow={isGravePath}
          khundiShow={isKhundiPath}
          search={search}
          setSearch={setSearch}
          graveyard={graveyard}
          setGraveyard={setGraveyard}
          khundi={khundi}
          setKhundi={setKhundi}
          graveyardOptions={graveyardOptions}
          khundiOptions={khundiOptions}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {displayGraves.length > 0 ? (
            displayGraves.map((grave) => (
              <div
                key={grave.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-red-600 to-red-400 p-4">
                  <h3 className="text-2xl font-bold text-white truncate h-16 text-wrap">
                    {grave.Name}
                  </h3>
                </div>
                <div className="p-5 space-y-2 text-gray-700">
                  <p className="flex">
                    <span className="font-semibold w-24">Grave No:</span>
                    <span>{grave.GraveNo}</span>
                  </p>
                  <p className="flex">
                    <span className="font-semibold w-24">Graveyard:</span>
                    <span>{grave.Graveyard}</span>
                  </p>
                  <p className="flex">
                    <span className="font-semibold w-24">Khundi:</span>
                    <span>{grave.KHUNDI}</span>
                  </p>
                  <p className="flex">
                    <span className="font-semibold w-24">Death Date:</span>
                    <span>{grave.DOD}</span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-p text-white">
              No records found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
