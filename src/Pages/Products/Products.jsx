import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../../Components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios.get(`http://localhost:3000/products?search=${search}`).then((res) => {
      setProducts(res.data);
    });
  }, [search]);
  console.log(products);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };
  return (
    <div className="mx-8 mb-6">
      <div className="flex justify-evenly mt-2">
        <div className="flex md:flex-row flex-col gap-4 justify-center my-8">
          <form
            onSubmit={handleSearch}
            className="flex p-1 overflow-hidden border rounded"
          >
            <input
              className="px-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="productSearch"
              placeholder="Enter Product Title"
            />

            <button className="px-1 md:px-4 py-1 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700">
              Search
            </button>
          </form>
          <select
            onChange={(e) => setBrand(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">All Brands</option>
            <option value="Gucci">Gucci</option>
            <option value="Ralph Lauren">Ralph Lauren</option>
            <option value="Calvin Klein">Calvin Klein</option>
            <option value="Hugo Boss">Hugo Boss</option>
          </select>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">All Categories</option>
            <option value="Shoe(s)">Shoe(s)</option>
            <option value="Shirt">Shirt</option>
            <option value="T-shirt">T-shirt</option>
            <option value="Pant">Pant</option>
          </select>
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border p-2 rounded md:w-40 w-full"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border p-2 rounded md:w-40 w-full"
          />

          {/* Sort By Dropdown */}
          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="creationDate">Date</option> {/* Updated Label */}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      
    </div>
  );
};

export default Products;
