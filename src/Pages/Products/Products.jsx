import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../../Components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/products?search=${search}`).then((res) => {
      setProducts(res.data);
    });
  }, [search]);
  console.log(products);

  const options = [
    { value: "Easy", label: "Easy" },
    { value: "Medium", label: "Medium" },
    { value: "Hard", label: "Hard" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };
  return (
    <div className="mx-4 mb-6">
      <div className="flex justify-evenly mt-10">
        <div className="max-w-80 flex-1">
          <select
            defaultValue="DEFAULT"
            onChange={(e) => setFilter(e.target.value)}
            className="select min-h-11 h-11 mt-1 select-bordered w-full"
          >
            <option value="DEFAULT" disabled>
              Select Difficulty
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="productSearch"
              placeholder="Enter Product Title"
            />

            <button className="px-1 md:px-4 py-1 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-2">
        {products.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)}
      </div>
    </div>
  );
};

export default Products;
