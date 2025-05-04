import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../context/UserContext";
import Button from "../common/Button";
import AddGraveForm from "./AddGraveForm";
import GraveTable from "./GraveTable";

const Admin = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="min-h-screen  bg-gray-100">
      {/* Header with logout button */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 px-24">
        <h1 className="text-p md:text-h1 font-bold gradient-text text-nowrap">Admin Dashboard</h1>
        <div className="flex flex-col md:flex-row justify-start items-center gap-4">
          <Button
            fill
            className={"!w-fit px-24 text-nowrap  hover:!bg-gray-400 hover:!text-white"}
            label={"Add Grave"}
            onClick={() => setShowForm(true)}
          />

          <Button
            danger
            fill
            className={"!w-fit px-24"}
            label={"Logout"}
            onClick={handleLogout}
          />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex w-full h-full gap-4">
        <div className="w-full px-2 md:px-24">
          {showForm ? (
            <AddGraveForm setShowForm={setShowForm} />
          ) : (
            <GraveTable />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
