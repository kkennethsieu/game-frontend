import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Dropdown({
  label,
  options = [],
  selected,
  onChange,
  className = "",
  placeholder = "Select...",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block mb-1 font-medium text-gray-700 text-sm">
          {label}
        </label>
      )}

      <button
        type="button"
        className={`w-full flex items-center justify-between rounded-lg border border-gray-300 bg-white text-gray-800 px-4 py-2 transition-colors hover:border-gray-400 focus:ring-2 focus:ring-orange-400 focus:outline-none`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected || placeholder}</span>
        <ChevronDownIcon
          className={`h-4 w-4 ml-2 text-gray-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul
          className="z-10 absolute bg-white shadow-md mt-2 border border-gray-200 rounded-lg w-full overflow-hidden"
          role="listbox"
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-gray-800 cursor-pointer hover:bg-orange-500 hover:text-white transition-colors ${
                selected === option ? "bg-orange-100 text-orange-800" : ""
              }`}
              role="option"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
