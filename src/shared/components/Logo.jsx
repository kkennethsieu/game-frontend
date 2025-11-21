import LogoImage from "assets/logo.png";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={LogoImage} className="w-16 h-16" />
      <h1 className="font-carter text-4xl text-center">
        Play
        <span className="text-orange-600">Review</span>
      </h1>
    </div>
  );
}

export default Logo;
