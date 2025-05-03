import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Input from "../common/Input"; // adjust the path to your Input component
import Button from "../common/Button";
import GraveContext from "../../context/GraveContext";

const AddGraveForm = ({ setShowForm }) => {
  const { addGrave } = useContext(GraveContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Grave Data Submitted:", data);
    addGrave(data);
    reset();
    setShowForm(false);
  };

  return (
    <>
      <form
        style={{
          background:
            "radial-gradient(61.05% 50.86% at 50% 46.33%, #F15050 0%, #850C0C 100%)",
        }}
        onSubmit={handleSubmit(onSubmit)}
        className=" space-y-4 mx-auto bg-gary-200 p-5 px-12"
      >
        <Input
          type="number"
          label="Grave No"
          name="GraveNo"
          placeholder="Enter Grave Number"
          register={register}
          rules={{ required: "Grave number is required" }}
          error={errors.GraveNo}
        />

        <Input
          label="Graveyard"
          name="Graveyard"
          placeholder="Enter Graveyard Name"
          register={register}
          rules={{ required: "Graveyard name is required" }}
          error={errors.Graveyard}
        />

        <Input
          label="Name"
          name="Name"
          placeholder="Enter Deceased Name"
          register={register}
          rules={{ required: "Name is required" }}
          error={errors.Name}
        />

        <Input
          label="Khundi"
          name="KHUNDI"
          placeholder="Enter Khundi"
          register={register}
          rules={{ required: "Khundi is required" }}
          error={errors.KHUNDI}
        />

        <Input
          label="Date of Death"
          type="date"
          name="DOD"
          placeholder="DD-MM-YY"
          register={register}
          rules={{ required: "Date of Death is required" }}
          error={errors.DOD}
        />
      </form>
      <div className="py-6 flex items-center justify-center gap-6 w-fit mx-auto">
        <Button
          label={"Cancel"}
          className={"!w-fit px-6 mx-auto"}
          onClick={() => setShowForm(false)}
          fill
          danger={true}
        />
        <Button
          label={"Save Grave"}
          className={"!w-fit px-6 mx-auto hover:!bg-blue-400 hover:!text-white"}
          fill
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </>
  );
};

export default AddGraveForm;
