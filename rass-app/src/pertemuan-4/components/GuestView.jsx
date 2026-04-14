import React, { useState, useMemo } from "react";
import restaurantsData from "../data/restaurants.json";

export default function GuestView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  // Get unique categories and price ranges
  const categories = ["All", ...new Set(restaurantsData.map((r) => r.category))];
  const priceRanges = ["All", "$", "$$", "$$$"];

  // Filter data berdasarkan search dan filters
  const filteredData = useMemo(() => {
    return restaurantsData.filter((restaurant) => {
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
  }, [searchTerm, selectedCategory, selectedPriceRange]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-2 text-center">
          Restaurant <span className="text-amber-400">Directory</span>
        </h1>
        <p className="text-center text-slate-400 text-sm md:text-base">
          Discover amazing dining experiences across Indonesia
        </p>
      </div>

      {/* Search & Filter Section */}
      <div className="max-w-7xl mx-auto mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search restaurants or dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 md:px-6 py-3 rounded-lg bg-slate-800/50 border border-amber-400/30 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
          />
          <svg
            className="absolute right-4 top-3.5 w-5 h-5 text-slate-400"
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

        {/* Filters - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-semibold text-amber-400 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-amber-400/30 text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-slate-900">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block text-sm font-semibold text-amber-400 mb-2">
              Price Range
            </label>
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-amber-400/30 text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all cursor-pointer"
            >
              {priceRanges.map((price) => (
                <option key={price} value={price} className="bg-slate-900">
                  {price === "All" ? "All Prices" : price}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <p className="text-sm text-slate-300">
          Showing <span className="font-bold text-amber-400">{filteredData.length}</span> of{" "}
          <span className="font-bold text-amber-400">{restaurantsData.length}</span> restaurants
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((restaurant) => (
              <div
                key={restaurant.id}
                className="group rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-400/20 hover:border-amber-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20 hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48 md:h-56 bg-slate-700">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Badge Category */}
                  <div className="absolute top-3 right-3 bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {restaurant.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 flex-grow flex flex-col">
                  {/* Name & Rating */}
                  <h3 className="text-lg md:text-xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {restaurant.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(restaurant.rating)
                              ? "text-amber-400"
                              : "text-slate-600"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-amber-400 ml-1">
                      {restaurant.rating}
                    </span>
                  </div>

                  {/* Location */}
                  <p className="text-sm text-slate-300 mb-3 flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{restaurant.location.city}, {restaurant.location.district}</span>
                  </p>

                  {/* Operating Hours */}
                  <p className="text-xs text-slate-400 mb-3">
                    {restaurant.operatingHours.open} - {restaurant.operatingHours.close}
                  </p>

                  {/* Specialties Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {restaurant.specialties.slice(0, 2).map((spec, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-300 px-2.5 py-1 rounded-full text-xs font-semibold"
                      >
                        {spec}
                      </span>
                    ))}
                    {restaurant.specialties.length > 2 && (
                      <span className="inline-block text-slate-400 text-xs pt-1">
                        +{restaurant.specialties.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Footer - Price & Button */}
                  <div className="mt-auto pt-4 border-t border-slate-700 flex items-center justify-between">
                    <span className="text-amber-400 font-black text-lg">
                      {restaurant.priceRange}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-900 text-sm font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-amber-400/50">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 mx-auto text-slate-600 mb-4"
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
            <h3 className="text-xl font-bold text-white mb-2">No restaurants found</h3>
            <p className="text-slate-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
