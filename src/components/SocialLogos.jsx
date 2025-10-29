import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Pinterest from "../assets/pinterest.svg";
function SocialLogos() {
  return (
    <div className="flex gap-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={Facebook} alt="Facebook" className="w-7 h-7" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={Instagram} alt="Instagram" className="w-7 h-7" />
      </a>
      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
        <img src={Pinterest} alt="Pinterest" className="w-7 h-7" />
      </a>
    </div>
  );
}

export default SocialLogos;
