import { createContext, useState } from "react";
import { dummyGraves } from "../assets/helpers.js";

const GraveContext = createContext();

export const GraveProvider = ({ children }) => {
  const [graves, setGraves] = useState(dummyGraves);
  console.log("graves all, ", graves);
  // ✅ Add new grave
  const addGrave = (grave) => {
    const newGrave = { id: Date.now(), ...grave };
    setGraves((prev) => [...prev, newGrave]);
  };

  // ✏️ Edit grave by ID
  const editGrave = (updatedGrave) => {
    setGraves((prevGraves) =>
      prevGraves.map((grave) =>
        grave.id === updatedGrave.id ? updatedGrave : grave
      )
    );
  };

  //  Delete grave by ID
  const deleteGrave = (id) => {
    setGraves((prev) => prev.filter((grave) => grave.id !== id));
  };

  return (
    <GraveContext.Provider value={{ graves, addGrave, editGrave, deleteGrave }}>
      {children}
    </GraveContext.Provider>
  );
};

export default GraveContext;
