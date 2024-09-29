import cut from "../assets/landingDesign.png";
function HeroBackground({ children }) {
  return (
    <div className="relative bg-custom-gradient w-full min-h-screen">
      <img
        className="absolute bottom-0 w-full h-[400px] lg:h-[600px]"
        src={cut}
        alt="Background Pattern"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default HeroBackground;
