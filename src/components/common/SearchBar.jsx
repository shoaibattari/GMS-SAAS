import CustomSelect from "./CustomSelect";

const SearchBar = ({
  search,
  setSearch,
  graveShow = true,
  graveyard,
  setGraveyard,
  khundiShow = true,
  khundi,
  setKhundi,
  graveyardOptions,
  khundiOptions,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white shadow p-4 rounded-lg my-6">
      <input
        type="text"
        placeholder="Search by name or grave no."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full"
      />

      {graveShow && (
        <CustomSelect
          label="Select Graveyard"
          value={graveyard}
          setValue={setGraveyard}
          options={graveyardOptions}
        />
      )}
      {khundiShow && (
        <CustomSelect
          label="Select Khundi"
          value={khundi}
          setValue={setKhundi}
          options={khundiOptions}
        />
      )}
    </div>
  );
};

export default SearchBar;
