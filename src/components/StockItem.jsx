import React from "react";

const StockItem = ({ stock }) => {
  const percentageChangeClass =
    stock.percentageChange > 0 ? "positive" : "negative";
  const significantChangeClass =
    Math.abs(stock.percentageChange) > 5 ? "significant" : "";

  return (
    <div className={`stock-item ${significantChangeClass}`}>
      <span className="symbol">{stock.symbol}</span>
      <span className="price">${stock.price.toFixed(2)}</span>
      <span className={`percentage-change ${percentageChangeClass}`}>
        {stock.percentageChange > 0 ? "+" : ""}
        {stock.percentageChange.toFixed(2)}%
      </span>
    </div>
  );
};

export default StockItem;
