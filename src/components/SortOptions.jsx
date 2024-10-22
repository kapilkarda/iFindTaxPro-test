import React, { useState, useEffect } from "react";

const SortOptions = ({ onSortChange, initialValue }) => {
  const [sortOption, setSortOption] = useState(initialValue);

  useEffect(() => {
    setSortOption(initialValue);
  }, [initialValue]);

  const handleChange = (e) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    onSortChange(newSortOption);
  };

  return (
    <div className="sort-options">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortOption} onChange={handleChange}>
        <option value="none">None</option>
        <option value="priceAsc">Price (Low to High)</option>
        <option value="priceDesc">Price (High to Low)</option>
        <option value="changeAsc">% Change (Low to High)</option>
        <option value="changeDesc">% Change (High to Low)</option>
      </select>
    </div>
  );
};

export default SortOptions;
