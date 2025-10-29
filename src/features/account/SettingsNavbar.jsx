import SidebarLink from "../../components/SidebarLink";

function SettingsNavbar() {
  return (
    <>
      {/* Header */}
      <h2 className="mb-4 font-bold text-gray-800 text-2xl">My Account</h2>
      <div className="mb-4 border-gray-300 border-b" />

      {/* Links */}
      <nav className="flex flex-col gap-2">
        <SidebarLink to="/account" icon="carbon:review" text="My Reviews" />
        <SidebarLink
          to="/account/settings"
          icon="carbon:settings"
          text="Settings"
        />
      </nav>
    </>
  );
}

export default SettingsNavbar;
