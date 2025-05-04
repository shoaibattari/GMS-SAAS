import React, { useContext, useState } from "react";
import GraveContext from "../../context/GraveContext";
import SearchBar from "../common/SearchBar";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const GraveUserView = () => {
  const { graves } = useContext(GraveContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [graveyard, setGraveyard] = useState("");
  const [khundi, setKhundi] = useState("");

  const graveyardOptions = [
    { value: "hubriver1", label: "Hub River 1" },
    { value: "hubriver2", label: "Hub River 2" },
    { value: "hubriver3", label: "Hub River 3" },
  ];

  const khundiOptions = [
    { value: "jakhura", label: "Jakhura" },
    { value: "sindhi", label: "Sindhi" },
    { value: "punjabi", label: "Punjabi" },
  ];

  const filteredGraves = graves.filter((grave) => {
    const matchesSearch =
      grave?.Name.toLowerCase().includes(search.toLowerCase()) ||
      grave?.GraveNo.toString().includes(search);
    const matchesGraveyard = graveyard ? grave.Graveyard === graveyard : true;
    const matchesKhundi = khundi ? grave.KHUNDI === khundi : true;
    return matchesSearch && matchesGraveyard && matchesKhundi;
  });
  const displayGraves = filteredGraves.slice(0, 6);

  return (
    <div className="container mx-auto px-4">
      <SearchBar
        search={search}
        setSearch={setSearch}
        graveyard={graveyard}
        setGraveyard={setGraveyard}
        khundi={khundi}
        setKhundi={setKhundi}
        graveyardOptions={graveyardOptions}
        khundiOptions={khundiOptions}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayGraves.length > 0 ? (
          displayGraves.map((grave) => (
            <div
              key={grave.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-red-600 to-red-400 p-4">
                <h3 className="text-2xl font-bold text-white truncate text-wrap h-16">
                  {grave.Name}
                </h3>
              </div>
              <div className="p-5 space-y-2 text-gray-700">
                <p className="flex">
                  <span className="font-semibold w-24">Grave No:</span>
                  <span>{grave.GraveNo}</span>
                </p>
                <p className="flex">
                  <span className="font-semibold w-24">graveyard:</span>
                  <span>{grave.Graveyard}</span>
                </p>
                <p className="flex">
                  <span className="font-semibold w-24">Khundi:</span>
                  <span>{grave.KHUNDI}</span>
                </p>
                <p className="flex">
                  <span className="font-semibold w-24">D.O.D:</span>
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
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          label="Graveyard Section "
          className={"!py-6 text-h4 font-semibold"}
          onClick={() => navigate("/guest/grave")}
          fill
        />
        <Button
          label="Khundi Section"
          className={"!py-6 text-h4 font-semibold"}
          onClick={() => navigate("/guest/khundi")}
        />
      </div>
    </div>
  );
};

export default GraveUserView;
