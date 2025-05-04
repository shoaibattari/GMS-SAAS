import React from "react";

const UserViewHero = ({ section }) => {
  return (
    <section
      style={{
        background:
          "radial-gradient(61.05% 50.86% at 50% 46.33%, #F15050 0%, #850C0C 100%)",
      }}
      className="py-20 text-center flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 w-[50%] ">
        <h1 className="text-6xl  text-white mb-4 font-medium ">
          WellCome To
          <span className="gradient-text"> {section} Record Portal</span>
        </h1>
        <p className="text-lg text-white text-balance font-medium">
          Search and view grave records by name, number, location, or khundi.
          This system helps you easily locate loved ones.
        </p>
      </div>
    </section>
  );
};

export default UserViewHero;
