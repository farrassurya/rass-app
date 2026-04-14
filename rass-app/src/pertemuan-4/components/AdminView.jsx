import React, { useState, useMemo } from "react";
import restaurantsData from "../data/restaurants.json";

export default function AdminView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });

  // Get unique categories and price ranges
  const categories = ["All", ...new Set(restaurantsData.map((r) => r.category))];
  const priceRanges = ["All", "$", "$$", "$$$"];

  // Filter dan sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = restaurantsData.filter((restaurant) => {
      const matchesSearch =
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.specialties.some((s) =>
          s.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || restaurant.category === selectedCategory;

      const matchesPrice =
        selectedPriceRange === "All" || restaurant.priceRange === selectedPriceRange;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort
    filtered.sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortConfig]);

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc",
    });
  };

  const SortIcon = ({ column }) => {
    if (sortConfig.key !== column) {
      return <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m0 0l4 4m10-4v12m0 0l4-4m0 0l-4-4" />
      </svg>;
    }

    return (
      <svg
        className="w-4 h-4 text-amber-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        {sortConfig.direction === "asc" ? (
          <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        ) : (
          <path d="M3 20a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V7l-4-4v6.586a1 1 0 00-.293.707L3.293 17.293A1 1 0 013 18.586V20z" />
        )}
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-1">
          Restaurant <span className="text-amber-400">Management</span>
        </h1>
        <p className="text-slate-400 text-sm">Manage and monitor all restaurants</p>
      </div>

      {/* Search & Filter Section */}
      <div className="max-w-7xl mx-auto mb-8">
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search by name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 md:px-5 py-2.5 rounded-lg bg-slate-800/50 border border-amber-400/30 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
          />
          <svg
            className="absolute right-3 top-2.5 w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Filters - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-xs font-bold text-amber-400 mb-1.5 uppercase tracking-wider">
              Filter by Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-slate-800/50 border border-amber-400/30 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-slate-900">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-amber-400 mb-1.5 uppercase tracking-wider">
              Filter by Price Range
            </label>
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-slate-800/50 border border-amber-400/30 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all cursor-pointer"
            >
              {priceRanges.map((price) => (
                <option key={price} value={price} className="bg-slate-900">
                  {price === "All" ? "All Prices" : price}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Info */}
        <p className="text-xs text-slate-300 mb-4">
          Showing <span className="font-bold text-amber-400">{filteredAndSortedData.length}</span> of{" "}
          <span className="font-bold text-amber-400">{restaurantsData.length}</span> restaurants
        </p>
      </div>

      {/* Table - Responsive Container */}
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden border border-amber-400/20 shadow-2xl">
        <div className="overflow-x-auto bg-slate-800/50 backdrop-blur">
          {filteredAndSortedData.length > 0 ? (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-amber-600/20 to-amber-500/10 border-b border-amber-400/30">
                  <th className="px-4 py-4 text-left">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center gap-2 font-black text-amber-400 uppercase tracking-wider text-xs hover:text-amber-300 transition-colors"
                    >
                      Restaurant Name
                      <SortIcon column="name" />
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left">
                    <button
                      onClick={() => handleSort("category")}
                      className="flex items-center gap-2 font-black text-amber-400 uppercase tracking-wider text-xs hover:text-amber-300 transition-colors"
                    >
                      Category
                      <SortIcon column="category" />
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left">
                    <button
                      onClick={() => handleSort("rating")}
                      className="flex items-center gap-2 font-black text-amber-400 uppercase tracking-wider text-xs hover:text-amber-300 transition-colors"
                    >
                      Rating
                      <SortIcon column="rating" />
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left font-black text-amber-400 uppercase tracking-wider text-xs">
                    Location
                  </th>
                  <th className="px-4 py-4 text-left font-black text-amber-400 uppercase tracking-wider text-xs">
                    Operating Hours
                  </th>
                  <th className="px-4 py-4 text-left font-black text-amber-400 uppercase tracking-wider text-xs">
                    Price
                  </th>
                  <th className="px-4 py-4 text-left font-black text-amber-400 uppercase tracking-wider text-xs">
                    Contact
                  </th>
                  <th className="px-4 py-4 text-left font-black text-amber-400 uppercase tracking-wider text-xs">
                    Specialties
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedData.map((restaurant, idx) => (
                  <tr
                    key={restaurant.id}
                    className={`border-b border-slate-700/50 transition-colors hover:bg-slate-700/30 ${
                      idx % 2 === 0 ? "bg-slate-800/30" : "bg-slate-800/10"
                    }`}
                  >
                    <td className="px-4 py-4 font-bold text-white">
                      {restaurant.name}
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-300 px-2.5 py-1 rounded-full text-xs font-semibold">
                        {restaurant.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1">
                        <span className="font-black text-amber-400">
                          {restaurant.rating}
                        </span>
                        <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-slate-300 text-xs">
                      {restaurant.location.city}
                      <br />
                      <span className="text-slate-500">{restaurant.location.district}</span>
                    </td>
                    <td className="px-4 py-4 text-slate-300 text-xs whitespace-nowrap">
                      {restaurant.operatingHours.open} - {restaurant.operatingHours.close}
                      {restaurant.operatingHours.dayOff !== "None" && (
                        <div className="text-slate-500 text-xs">Off: {restaurant.operatingHours.dayOff}</div>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <span className="font-black text-amber-400 text-base">
                        {restaurant.priceRange}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate-300">
                      {restaurant.contact.phone}
                      <br />
                      <a href={`mailto:${restaurant.contact.email}`} className="text-amber-400 hover:text-amber-300">
                        {restaurant.contact.email}
                      </a>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1">
                        {restaurant.specialties.map((spec, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-12 text-center">
              <svg
                className="w-12 h-12 mx-auto text-slate-600 mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-bold text-white mb-1">
                No restaurants found
              </h3>
              <p className="text-slate-400 text-sm">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
