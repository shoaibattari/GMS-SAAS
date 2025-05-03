import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../context/UserContext";
import Button from "../common/Button";
import AddGraveForm from "./AddGraveForm";

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
      <div className="flex w-full h-full">
        <div className="w-full flex-2 bg-white">
          <Button
            primary
            label="Add Grave"
            fill
            className="w-full mb-4 py-6 text-3xl hover:!bg-yellow-600 hover:!text-white"
            onClick={() => setShowForm(true)}
          />
        </div>
        <div className="w-full flex-8">
          {showForm && <AddGraveForm setShowForm={setShowForm} />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
