import { Outlet } from "react-router-dom";
import SettingsNavbar from "features/user/components/SettingsNavbar";

function AccountLayout() {
  return (
    <div className="flex gap-10 mx-auto p-20 max-w-[1700px]">
      <aside className="flex flex-col shadow-sm p-6 border border-gray-200 rounded-xl w-64">
        <SettingsNavbar />
      </aside>
      <main className="flex flex-1 p-6 border border-gray-200 rounded-lg">
        <Outlet />
      </main>
    </div>
  );
}

export default AccountLayout;
