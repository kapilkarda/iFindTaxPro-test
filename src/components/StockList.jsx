import React from "react";
import StockItem from "./StockItem";

const StockList = ({ stocks }) => {
  return (
    <div className="stock-list">
      {stocks.map((stock) => (
        <StockItem key={stock.symbol} stock={stock} />
      ))}
    </div>
  );
};

export default StockList;
