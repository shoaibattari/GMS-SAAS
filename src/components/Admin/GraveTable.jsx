import React, { useContext, useState, useMemo } from "react";
import GraveContext from "../../context/GraveContext";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import WarningModal from "./WarningModal";
import EditGraveModal from "./EditGraveModal";

const GraveTable = () => {
  const { graves, deleteGrave } = useContext(GraveContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [editGrave, setEditGrave] = useState(null);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const openModal = (id) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteGrave(selectedId);
    setModalOpen(false);
  };

  const paginatedGraves = useMemo(() => {
    const reversed = [...graves].reverse();
    const start = (currentPage - 1) * pageSize;
    return reversed.slice(start, start + pageSize);
  }, [graves, pageSize, currentPage]);

  const totalPages = Math.ceil(graves.length / pageSize);

  return (
    <>
      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="p-3">Grave No</th>
              <th className="p-3">Graveyard</th>
              <th className="p-3">Name</th>
              <th className="p-3">Khundi</th>
              <th className="p-3">DOD</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedGraves.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center p-4 text-gray-500">
                  No grave records available.
                </td>
              </tr>
            ) : (
              paginatedGraves.map((grave) => (
                <tr
                  key={grave?.id}
                  className="border-t cursor-pointer hover:bg-gray-100"
                >
                  <td className="p-3">{grave?.GraveNo}</td>
                  <td className="p-3">{grave?.Graveyard}</td>
                  <td className="p-3">{grave?.Name}</td>
                  <td className="p-3">{grave?.KHUNDI}</td>
                  <td className="p-3">{grave?.DOD}</td>
                  <td className="p-3 flex gap-4 justify-center">
                    <button
                      onClick={() => setEditGrave(grave)}
                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    >
                      <BsFillPencilFill size={18} />
                    </button>
                    <button
                      onClick={() => openModal(grave?.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination controls */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2 items-center">
            <label htmlFor="pageSize">Show:</label>
            <select
              id="pageSize"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border px-2 py-1 rounded"
            >
              {[5, 10, 20].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span>per page</span>
          </div>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <WarningModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
      {editGrave && (
        <EditGraveModal grave={editGrave} onClose={() => setEditGrave(null)} />
      )}
    </>
  );
};

export default GraveTable;
