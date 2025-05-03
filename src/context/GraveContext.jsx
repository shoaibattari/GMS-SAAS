import { createContext, useState } from "react";

const GraveContext = createContext();

export const GraveProvider = ({ children }) => {
  const [graves, setGraves] = useState([]);

  // ✅ Add new grave
  const addGrave = (grave) => {
    const newGrave = { id: Date.now(), ...grave };
    setGraves((prev) => [...prev, newGrave]);
  };

  // ✏️ Edit grave by ID
  const editGrave = (id, updatedGrave) => {
    setGraves((prev) =>
      prev.map((grave) =>
        grave.id === id ? { ...grave, ...updatedGrave } : grave
      )
    );
  };

  // ❌ Delete grave by ID
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
