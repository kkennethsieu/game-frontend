import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

function SidebarLink({ to, icon, text }) {
  return (
    <NavLink
      to={to}
      end={to === "/account"}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 font-medium ${
          isActive
            ? "bg-orange-200 text-orange-600"
            : "text-gray-700 hover:bg-orange-100 hover:text-orange-500"
        }`
      }
    >
      <Icon icon={icon} width={20} height={20} />
      <span className="flex-1">{text}</span>
    </NavLink>
  );
}

export default SidebarLink;
