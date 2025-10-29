import { useState, useRef } from "react";

function ActionMenuHover({
  buttonContent = "⋮",
  actions = [],
  titleClassName = "",
  onClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  let timeout;

  return (
    <div
      ref={containerRef}
      className="inline-block relative"
      onMouseEnter={() => {
        clearTimeout(timeout);
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        timeout = setTimeout(() => setIsOpen(false), 200);
      }}
    >
      {/* Trigger Button */}
      <button
        className={`p-1 cursor-pointer ${titleClassName}`}
        onClick={onClick}
      >
        {buttonContent}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="top-full right-0 z-50 absolute bg-white shadow-lg mt-2 border border-gray-200 rounded-lg divide-y divide-gray-100 w-48">
          {actions.map((action, i) => (
            <button
              key={i}
              onClick={action.onClick}
              className={`flex items-center gap-2 w-full px-4 py-3 text-left text-gray-700 text-sm font-medium rounded-none
                    hover:bg-orange-100 hover:text-orange-600 transition-colors duration-200
                    ${i === 0 ? "rounded-t-lg" : ""} 
                    ${i === actions.length - 1 ? "rounded-b-lg" : ""}`}
            >
              {action.icon && <action.icon className="w-4 h-4" />}
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ActionMenuHover;
