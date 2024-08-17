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
    axios
      .get(`http://localhost:3000/products`, {
        params: {
          page,
          limit: 10, // Number of products per page
          search,
          brand,
          category,
          minPrice,
          maxPrice,
          // sortBy,
          // sortOrder,
        },
      })
      .then((res) => {
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
      });
  }, [search, brand, category, maxPrice, minPrice, page, sortBy, sortOrder]);
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
            <option value="LG">LG</option>
            <option value="Hp">Hp</option>
            <option value="Samsung">Samsung</option>
            <option value="Walton">Walton</option>
          </select>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Cameras">Cameras</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Furniture">Furniture</option>
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
      <div className="flex justify-center items-center my-5">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-blue-600 text-white border px-3 py-1 mx-1 rounded"
        >
          Previous
        </button>
        <span className="px-3 py-1 mx-1">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="border px-3 py-1 mx-1 rounded bg-blue-600 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
