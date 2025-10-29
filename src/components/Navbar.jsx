import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import SocialLogos from "./SocialLogos";
import { useState } from "react";
import ActionMenuHover from "./ActionMenuHover";
import ConfirmModal from "./ConfirmModal";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const nav = useNavigate();

  const handleDelete = () => {};
  const handleLogout = () => {
    setIsDeleteOpen(true);
    console.log("logged out");
  };

  const loggedInActions = [
    { label: "My Account", onClick: () => nav("/account") },
    { label: "Settings", onClick: () => nav("/account/settings") },
    { label: "Sign Out", onClick: handleLogout },
  ];

  const loggedOutActions = [{ label: "Sign In", onClick: () => nav("/login") }];

  return (
    <>
      <div className="flex justify-between items-center mx-auto px-20 py-4 w-full max-w-[1700px]">
        <SocialLogos />
        <Link to="/">
          <Logo />
        </Link>

        <ActionMenuHover
          buttonContent="My Account"
          actions={loggedIn ? loggedInActions : loggedOutActions}
          titleClassName="text-lg font-semibold"
          onClick={() => {
            loggedIn ? nav("/account") : nav("/login");
          }}
        />
      </div>
      <ConfirmModal
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        onConfirm={handleDelete}
        title="Log Out"
        message="Are you sure you want to log out?"
        confirmText="Log out"
        confirmClassName="bg-red-500 hover:bg-red-600 text-white"
      />
    </>
  );
}

export default Navbar;
