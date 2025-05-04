import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../common/Input";
import Button from "../common/Button";
import GraveContext from "../../context/GraveContext";
import { GoXCircle } from "react-icons/go";
import { toast } from "react-toastify";

const EditGraveModal = ({ grave, onClose }) => {
  const { editGrave } = useContext(GraveContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      GraveNo: grave.GraveNo,
      Graveyard: grave.Graveyard,
      Name: grave.Name,
      KHUNDI: grave.KHUNDI,
      DOD: grave.DOD,
    },
  });

  const onSubmit = (data) => {
    toast.success("data updated successfully");
    editGrave({ id: grave.id, ...data });
    onClose();
  };
  const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in yyyy-mm-dd format

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div
        style={{
          background:
            "radial-gradient(61.05% 50.86% at 50% 46.33%, #F15050 0%, #850C0C 100%)",
        }}
        className="w-full max-w-lg rounded-3xl p-6"
      >
        {" "}
        <div className="flex items-center justify-between gap-3 text-white mb-4">
          <h2 className="text-white text-2xl font-bold mb-4">Edit Grave</h2>
          <GoXCircle onClick={onClose} className="cursor-pointer" size={32} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            type="select" // dropdown
            options={[
              { value: "hubriver1", label: "Hub River 1" },
              { value: "hubriver2", label: "Hub River 2" },
              { value: "hubriver3", label: "Hub River 3" },
            ]}
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
            type="select"
            options={[
              { value: "jakhura", label: "Jakhura" },
              { value: "sindhi", label: "Sindhi" },
              { value: "punjabi", label: "Punjabi" },
            ]}
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
            rules={{
              required: "Date of Death is required",
              max: {
                value: currentDate,
                message: "Date of Death cannot be in the future",
              },
            }}
            error={errors.DOD}
          />
          <div className="flex justify-end gap-4 pt-4">
            <Button label="Cancel" onClick={onClose} danger fill />
            <Button
              onClick={handleSubmit(onSubmit)}
              label="Update Grave"
              type="submit"
              fill
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditGraveModal;
