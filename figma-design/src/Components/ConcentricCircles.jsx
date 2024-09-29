import product from "../assets/product.png";
const ConcentricCircles = () => {
  const circles = [
    { opacity: "opacity-30", size: "100%" },
    { opacity: "opacity-60", size: "73%" },
    { opacity: "opacity-100", size: "53%" },
  ];

  return (
    <div className="relative w-[700px] h-[700px] md:w-[900px] md:h-[900px]">
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`absolute shadow-2xl rounded-full border-4 bg-white border-white ${circle.opacity}`}
          style={{
            width: circle.size,
            height: circle.size,
            top: `${(100 - parseInt(circle.size)) / 2}%`,
            left: `${(100 - parseInt(circle.size)) / 2}%`,
          }}
        />
      ))}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ width: "25%", height: "25%", margin: "auto" }}
      >
        <img
          src={product}
          alt="Discount"
          className=" h-[300px] md:h-[400px] object-cover rounded-full"
        />
      </div>
    </div>
  );
};
export default ConcentricCircles;
