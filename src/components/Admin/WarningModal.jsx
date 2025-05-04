import React from "react";
import { GoXCircle } from "react-icons/go";
import Button from "../common/Button";

const WarningModal = ({ open, onClose, onConfirm }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-2">
      <div className="bg-white flex flex-col gap-2 p-6 rounded-xl shadow-lg w-full max-w-md min-h-60">
        <div className="flex items-center justify-between gap-3 text-red-600 mb-4">
          <h2 className="text-p font-bold">Confirm Deletion</h2>
          <GoXCircle onClick={onClose} className="cursor-pointer" size={32} />
        </div>

        <p className="text-gray-700 text-pSmall mb-6">
          Are you sure you want to delete this grave record? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4">
          <Button label="Cancel" className={"border border-gray-400"} onClick={onClose} />
          <Button label="Delete" danger fill onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
