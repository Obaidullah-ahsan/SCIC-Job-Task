const ProductCard = ({ product }) => {
  const { Product_Name, Product_Image, Description, Price, Ratings , Category} = product;
  return (
    <div>
      <div className="max-w-[350px] border overflow-hidden bg-base-200 dark:bg-gray-800">
        <img
          className="object-cover w-full h-44"
          src={Product_Image}
          alt="Assignment image"
        />

        <div className="p-4 border-b h-48">
          <div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold flex rounded-lg justify-center items-center text-black min-h-8 h-8 max-w-[85px] w-[85px] bg-[#77f09b] dark:text-blue-400">
                {Price}
              </p>
              <p className="text-sm font-semibold flex rounded-lg justify-center items-center text-black min-h-8 h-8 max-w-16 w-16 bg-[#6fec94] dark:text-blue-400">
                {Ratings}
              </p>
            </div>
            <h2 className="block mt-2 text-xl font-semibold transition-colors duration-300 transform dark:text-white hover:text-[#5FCF80]">
              {Product_Name}
            </h2>
            <p className="text-sm text-gray-500">{Category}</p>
            <p className="mt-2 text-sm dark:text-gray-400">{Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
