import { useEffect, useRef, useState } from "react";

function ActionMenu({ buttonIcon, actions = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="top-0 right-0 absolute">
      <button
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {buttonIcon || "⋮"}
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="top-8 right-0 z-50 absolute flex flex-col bg-white shadow-md border border-gray-200 rounded-md divide-y divide-gray-300 w-28"
        >
          {actions.map((action, idx) => (
            <button
              key={idx}
              className="hover:bg-orange-200 px-4 py-2 text-gray-700 hover:text-orange-600 text-left transition-colors"
              onClick={() => {
                action.onClick();
                setIsOpen(false);
              }}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ActionMenu;
