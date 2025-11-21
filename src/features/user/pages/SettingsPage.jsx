import { useState } from "react";
import { Icon } from "@iconify/react";

function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  const handleSignOut = () => {
    // Your sign out logic here
    alert("Signed out!");
  };

  return (
    <div className="flex flex-col gap-2 space-y-3 p-4">
      {/* Heading */}
      <h2 className="relative pb-2 font-extrabold text-gray-900 text-2xl">
        Settings
        <span className="bottom-0 left-0 absolute bg-orange-500 rounded-full w-20 h-1"></span>
      </h2>

      {/* Dark Mode Toggle */}
      <section className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 shadow-sm p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <Icon
            icon="carbon:moon"
            width={20}
            height={20}
            className="text-gray-600 dark:text-gray-300"
          />
          <span className="font-medium text-gray-700 dark:text-gray-200">
            Dark Mode
          </span>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`mx-2 w-12 h-6 rounded-full p-1 transition-colors ${
            darkMode ? "bg-orange-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
              darkMode ? "translate-x-6" : ""
            }`}
          ></span>
        </button>
      </section>

      {/* Sign Out */}
      <section
        className="flex justify-center items-center bg-red-100 hover:bg-red-200 p-4 rounded-lg font-semibold text-red-700 transition-colors cursor-pointer"
        onClick={handleSignOut}
      >
        <Icon icon="carbon:logout" width={20} height={20} className="mr-2" />
        Sign Out
      </section>
    </div>
  );
}

export default SettingsPage;
