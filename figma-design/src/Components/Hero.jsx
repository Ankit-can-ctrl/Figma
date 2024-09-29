import Navbar from "./Navbar";
import carouselBtn from "../assets/carouselBtn.png";
import scrollIcon from "../assets/scroll.png";
import product from "../assets/product.png";
import HeroBackground from "./HeroBackground";

function Hero() {
  return (
    <HeroBackground>
      <div className="main-content w-full">
        <div className="main-container w-full h-full">
          <Navbar />
          <div className="hero_content w-full flex flex-col lg:flex-row gap-16 lg:gap-0 items-start justify-center px-5  pt-20 overflow-hidden">
            <div className="description flex flex-col items-center md:items-start gap-10 lg:ml-20 overflow-hidden ">
              <h1 className=" text-white font-Head font-light text-2xl lg:text-6xl flex flex-col items-center md:items-start text-center md:text-start gap-2">
                Welcome to{" "}
                <span>
                  <h1 className=" text-6xl lg:text-7xl font-bold">
                    Pop Rock Crystal Shop!
                  </h1>
                </span>
              </h1>
              <p className=" xl:text-xl font-Head text-[#31546d] justify-start font-normal w-[70%]">
                Here you will find unique phone accessories, crystals, jewelry
                and more. Free shipping inside the U.S. and our phone grips come
                with a limited warranty. Enjoy!
              </p>
              <div className="hero_btn flex items-center gap-5">
                <button className=" bg-white text-[#31546d] font-semibold w-36 p-4 md:px-6 rounded-2xl">
                  SHOP NOW
                </button>
                <button className="text-[#31546d] font-medium xl:text-xl">
                  about us
                </button>
              </div>
            </div>
            <div className="carousel w-full flex flex-col items-center justify-center gap-14 lg:gap-8 ">
              <div className=" relative carousel h-90 w-90 md:w-[569px] md:h-[554px] bg-white rounded-[40px] shadow-2xl">
                <h1 className="label absolute bg-[#8a93e5] text-white font-Head font-semibold lg:text-xl px-4 py-2 rounded-r-xl top-[20%]">
                  New Lot
                </h1>
                <div className="Carousel_image  w-full h-full flex flex-col items-center justify-center p-5 lg:p-0">
                  <img src={product} alt="product" />
                  <div className="product_title w-full flex flex-col items-center gap-3">
                    <div className=" border-2 border-gray-200 w-36" />
                    <h1 className=" text-[#808080] md:text-xl text-center">
                      CRYSTAL AGATE PHONE GRIP{" "}
                      <span className=" text-[#317189] font-bold">
                        - 18.99$
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              <img
                className=" w-[204px] h-[24px]"
                src={carouselBtn}
                alt="Swiper"
              />
            </div>
          </div>
          <div className=" scroll_icon w-full flex items-center justify-center gap-4   ">
            <img src={scrollIcon} alt="Scroll" />
            <h3 className="text-[#31546d] text-xl font-medium">scroll down</h3>
          </div>
        </div>
      </div>
    </HeroBackground>
  );
}

export default Hero;
