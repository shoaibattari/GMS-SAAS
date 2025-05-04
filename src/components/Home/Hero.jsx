import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section
      style={{
        background:
          "radial-gradient(61.05% 50.86% at 50% 46.33%, #F15050 0%, #850C0C 100%)",
      }}
      className="relative py-20 text-center flex flex-col items-center justify-center h-screen"
    >
      <div className="container mx-auto px-6 w-[60%] ">
        <h1 className="text-6xl  text-white mb-4 font-medium ">
          WellCome To <span className="gradient-text">GraveYard</span>{" "}
          Management System
        </h1>
        <p className="text-lg text-white text-balance font-medium">
          Easily search graveyard records of your loved ones. Whether you're a
          visitor or an admin, access organized data in seconds.
        </p>
        <div className="flex items-center justify-between gap-6 py-6">
          <Button onClick={()=> navigate("/guest")} label={"Guest"} />
          <Button onClick={()=> navigate("/login")} fill={true} label={"Admin"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
