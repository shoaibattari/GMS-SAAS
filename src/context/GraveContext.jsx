import { createContext, useState } from "react";

const GraveContext = createContext();

export const GraveProvider = ({ children }) => {
  const dummyGraves = Array.from({ length: 20 }, (_, i) => ({
    id: Date.now() + i,
    GraveNo: `${i + 1}`,
    Graveyard: `hubriver${(i % 3) + 1}`,
    Name: `Person ${i + 1} W/O Someone`,
    KHUNDI: `Location ${(i % 5) + 1}`,
    DOD: `2025-05-${((i % 28) + 1).toString().padStart(2, "0")}`,
  }));

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
