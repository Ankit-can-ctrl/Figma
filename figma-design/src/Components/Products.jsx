import productImage from "../assets/product.png";

const products = Array(8).fill({
  name: "CRYSTAL AGATE PHONE GRIP",
  price: 18.99,
  image: productImage,
});

function Products() {
  return (
    <div className="w-full products_container border-t-2 border-gray-200  flex flex-col items-center mt-10">
      <div className="text-[#31546d] flex flex-col gap-10 items-center justify-center py-20">
        <h1 className=" text-5xl md:text-6xl font-semibold">All product</h1>
        <div className=" w-20 h-1 bg-gray-200 rounded-md" />
        <div className="items w-full px-5 lg:px-10 font-Head">
          <div className=" flex flex-col gap-10">
            <div className="filter_sort flex flex-col md:flex-row justify-start items-center md:gap-20 mb-4">
              <div className="flex items-center">
                <span className="mr-2 text-[#9ab0c0] font-bold text-lg">
                  Filter:
                </span>
                <select className="text-lg font-bold text-[#31564d] p-1 outline-none">
                  <option>All Products</option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-[#9ab0c0] font-bold text-lg">
                  Sort:
                </span>
                <select className="text-lg font-bold text-[#31564d] p-1 outline-none">
                  <option>Best Selling</option>
                </select>
              </div>
            </div>
            <div className="products_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  isFirstItem={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className="w-fit border-4 py-4 px-5 text-xl  rounded-2xl border-[#7bc8f3] text-[#7bc8f3]  hover:bg-[#74caed] hover:text-white font-bold">
        View All
      </button>
    </div>
  );
}

export default Products;

const ProductCard = ({ product }) => (
  <div className="bg-white py-10 rounded-[50px] shadow-lg border-2 border-gray-300 flex flex-col items-center justify-center hover:shadow-2xl">
    <img
      src={product.image}
      alt={product.name}
      className=" h-34  object-contain mb-4"
    />
    <h3 className="text-md font-semibold text-gray-600 mb-2">{product.name}</h3>
    <p className="text-lg font-bold text-[#317189] mb-4">
      {product.price.toFixed(2)}$
    </p>
    <button className=" border-4 py-4 px-10 rounded-2xl border-[#7bc8f3] text-[#7bc8f3]  hover:bg-[#74caed] hover:text-white font-semibold">
      BUY NOW
    </button>
  </div>
);
