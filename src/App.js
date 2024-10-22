import React, { useState, useEffect } from "react";
import StockList from "./components/StockList";
import FilterForm from "./components/FilterForm";
import SortOptions from "./components/SortOptions";
import { fetchStocks } from "./api";
export default function App() {
  const [stocks, setStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [filterThreshold, setFilterThreshold] = useState(0);
  const [sortOption, setSortOption] = useState("none");

  useEffect(() => {
    const loadStocks = async () => {
      const fetchedStocks = await fetchStocks();
      setStocks(fetchedStocks);
      setFilteredStocks(fetchedStocks);
    };
    loadStocks();
  }, []);

  useEffect(() => {
    const filtered = stocks.filter(
      (stock) => Math.abs(stock.percentageChange) >= filterThreshold
    );
    const sorted = sortStocks(filtered, sortOption);
    setFilteredStocks(sorted);
  }, [stocks, filterThreshold, sortOption]);

  const handleFilterChange = (threshold) => {
    setFilterThreshold(threshold);
    localStorage.setItem("filterThreshold", threshold.toString());
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    localStorage.setItem("sortOption", option);
  };

  useEffect(() => {
    const savedThreshold = localStorage.getItem("filterThreshold");
    const savedSortOption = localStorage.getItem("sortOption");
    if (savedThreshold) {
      setFilterThreshold(parseFloat(savedThreshold));
    }
    if (savedSortOption) {
      setSortOption(savedSortOption);
    }
  }, []);

  const sortStocks = (stocksToSort, option) => {
    switch (option) {
      case "priceAsc":
        return [...stocksToSort].sort((a, b) => a.price - b.price);
      case "priceDesc":
        return [...stocksToSort].sort((a, b) => b.price - a.price);
      case "changeAsc":
        return [...stocksToSort].sort(
          (a, b) => a.percentageChange - b.percentageChange
        );
      case "changeDesc":
        return [...stocksToSort].sort(
          (a, b) => b.percentageChange - a.percentageChange
        );
      default:
        return stocksToSort;
    }
  };

  return (
    <div className="container">
      <h1 className="title">Stock Monitoring Dashboard</h1>
      <div className="controls">
        <FilterForm
          onFilterChange={handleFilterChange}
          initialValue={filterThreshold}
        />
        <SortOptions
          onSortChange={handleSortChange}
          initialValue={sortOption}
        />
      </div>
      <StockList stocks={filteredStocks} />
    </div>
  );
}
