export const dummyGraves = Array.from({ length: 20 }, (_, i) => {
  const khundiOptions = [
    { value: "jakhura", label: "Jakhura" },
    { value: "sindhi", label: "Sindhi" },
    { value: "punjabi", label: "Punjabi" },
  ];

  // Select a random KHUNDI option
  const randomKhundi =
    khundiOptions[Math.floor(Math.random() * khundiOptions.length)].value;

  return {
    id: Date.now() + i,
    GraveNo: `${i + 1}`,
    Graveyard: `hubriver${(i % 3) + 1}`,
    Name: `Person ${i + 1} W/O Someone`,
    KHUNDI: randomKhundi,
    DOD: `2025-05-${((i % 28) + 1).toString().padStart(2, "0")}`,
  };
});
