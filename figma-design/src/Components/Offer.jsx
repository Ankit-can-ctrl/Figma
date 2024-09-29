import offerCut from "../assets/offerBg.png";
import ConcentricCircles from "./ConcentricCircles";
function Offer() {
  return (
    <OfferBackground>
      <div className="offer_container py-20 md:p-0 flex flex-col items-center lg:flex-row px-20 overflow-hidden">
        <div className="offer_details  flex flex-col items-end">
          <h2 className="uppercase text-[#31546d] text-3xl md:text-5xl">
            Best price
          </h2>
          <h1 className=" capitalize text-right text-[#31546d] text-5xl md:text-7xl font-bold">
            Agate phone grip
          </h1>
          <div className="price flex justify-end  md:gap-10 py-4 items-center">
            <h3 className="cutt_price text-[#7ad4fd] text-3xl line-through">
              44.50$
            </h3>
            <h2 className="new_price text-red-500 text-7xl">19.50$</h2>
          </div>
          <p className=" text-right md:pl-[40%] py-4 text-[#5a675c] font-semibold text-xl">
            These Pop Rock Crystal grip tops can be swapped with other tops
            depending on your mood, outfit, nails, phone case, holiday, etc.!
            Just gently squeeze the sides to remove and swap out with another
            color or design!
          </p>
          <button className=" text-white w-fit bg-[#75caed] rounded-2xl font-semibold text-xl py-5  px-8 mt-10">
            BUY NOW
          </button>
        </div>
        <div className="offer_image md:w-1/2 pt-20  mb-10 md:pt-0 ">
          <ConcentricCircles />
        </div>
      </div>
    </OfferBackground>
  );
}

export default Offer;

function OfferBackground({ children }) {
  return (
    <div className=" relative w-full lg:min-h-screen bg-offer-gradient">
      <img
        className=" absolute top-0 md:w-full h-[1000px] md:h-full"
        src={offerCut}
        alt="Offer pattern"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
