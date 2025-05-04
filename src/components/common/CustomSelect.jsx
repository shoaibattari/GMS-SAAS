import React, { useState, useMemo } from "react";
import { HiChevronDown } from "react-icons/hi";

const CustomSelect = ({ label, value, setValue, options }) => {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Filter options based on searchText
  const filteredOptions = useMemo(() => {
    if (searchText.trim() === "") return options;
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [options, searchText]);

  // Show search box only if there are 5 or more options
  const showSearch = options.length >= 5;

  return (
    <div className="relative w-full md:w-1/4">
      <button
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          setSearchText("");
        }}
        className="w-full flex items-center justify-between border rounded px-4 py-2 cursor-pointer text-left bg-white shadow focus:outline-none"
      >
        <span className="truncate">
          {value ? options.find((opt) => opt.value === value)?.label : label}
        </span>
        <HiChevronDown
          className={`ml-2 transition-transform text-p ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow max-h-60 overflow-y-auto">
          {showSearch && (
            <div className="p-2">
              <input
                type="text"
                placeholder="Search…"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none"
              />
            </div>
          )}
          <div
            onClick={() => {
              setValue("");
              setOpen(false);
            }}
            className="px-4 py-2 cursor-pointer hover:bg-red-100"
          >
            All
          </div>
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setValue(option.value);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-red-100 ${
                value === option.value ? "bg-red-200 font-semibold" : ""
              }`}
            >
              {option.label}
            </div>
          ))}
          {filteredOptions.length === 0 && (
            <div className="px-4 py-2 text-gray-500">No matches found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
