import React, { useState, useEffect } from "react";

const FilterForm = ({ onFilterChange, initialValue }) => {
  const [threshold, setThreshold] = useState(initialValue);

  useEffect(() => {
    setThreshold(initialValue);
  }, [initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(threshold);
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <label htmlFor="threshold">Filter by % change:</label>
      <input
        type="number"
        id="threshold"
        value={threshold}
        onChange={(e) => setThreshold(parseFloat(e.target.value))}
        step="0.1"
        min="0"
      />
      <button type="submit">Apply</button>
    </form>
  );
};

export default FilterForm;
