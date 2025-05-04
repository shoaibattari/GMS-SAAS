const Input = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  rules,
  error,
  options, // added options prop for the dropdown
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 font-medium text-white">{label}</label>
      )}

      {/* Render dropdown (select) if type is select */}
      {type === "select" ? (
        <select
          className={`w-full px-4 py-2 border rounded bg-white ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...register(name, rules)}
        >
          {options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded bg-white ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...register(name, rules)}
        />
      )}

      {error && <p className="text-white text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Input;
