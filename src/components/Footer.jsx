import Logo from "./Logo";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mx-auto mb-4 p-8">
      <Logo />
      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/account">My Account</Link>
        <Link>About</Link>
        <Link>Contact Us</Link>
      </div>
      <div className="flex gap-4">
        <Link>Terms & Conditions</Link>
        <Link>Privacy Policy</Link>
      </div>
      <p className="text-sm">© 2025 PLAYREVIEW, INC. ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default Footer;
