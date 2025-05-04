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
    <div className="min-h-screen bg-gray-100">
      {/* Header with logout button */}
      <div className="flex justify-between items-center p-4  ">
        <h1 className="text-h1 font-bold gradient-text">Admin Dashboard</h1>
        <Button
          danger
          fill
          className={"!w-fit px-12"}
          label={"Logout"}
          onClick={handleLogout}
        />
      </div>

      {/* Main content area */}
      <div className="flex w-full h-full gap-4">
        <div className="w-full h-full flex-2 pt-4">
          <div
            className="w-fit px-12  mb-4 py-6 text-3xl cursor-pointer bg-gray-400 text-center rounded-xl ml-3 hover:!bg-yellow-600 hover:!text-white"
            onClick={() => setShowForm(true)}
          >
            Add Grave
          </div>
        </div>

        <div className="w-full flex-8">
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
