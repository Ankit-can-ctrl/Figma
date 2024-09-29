import logo from "../assets/logo.png";
import cart from "../assets/cart.png";

function Navbar() {
  const navLinks = ["Home", "Shop", "About Us", "Help"];

  return (
    <div className="navbar w-full px-5 md:px-20 py-10 flex items-center justify-between">
      <div className="logo">
        <img className=" text-white w-[250px]" src={logo} alt="Logo" />
      </div>
      <div className="hidden lg:flex Routes text-white font-Head text-xl font-medium  items-center justify-between gap-64">
        <div className="links flex items-center gap-10">
          {/* <a href="#">Home</a> */}
          {navLinks.map((item, index) => (
            <div key={index}>
              <a href="#">{item}</a>
            </div>
          ))}
        </div>
        <div className="cart cursor-pointer">
          <img className=" w-14" src={cart} alt="Cart" />
        </div>
      </div>
      <div className="lg:hidden menu text-2xl text-white font-semibold flex items-center gap-4 cursor-pointer">
        <img src={cart} alt="cart" />
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
