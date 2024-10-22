const mockStocks = [
  { symbol: "AAPL", price: 150.25, percentageChange: 2.5 },
  { symbol: "GOOGL", price: 2750.8, percentageChange: -1.2 },
  { symbol: "MSFT", price: 305.15, percentageChange: 0.8 },
  { symbol: "AMZN", price: 3300.5, percentageChange: -0.5 },
  { symbol: "FB", price: 330.2, percentageChange: 1.7 },
  { symbol: "TSLA", price: 750.75, percentageChange: 5.2 },
  { symbol: "NFLX", price: 550.4, percentageChange: -3.1 },
  { symbol: "NVDA", price: 220.9, percentageChange: 4.3 },
  { symbol: "JPM", price: 160.3, percentageChange: 0.3 },
  { symbol: "V", price: 240.6, percentageChange: -0.9 },
];

export const fetchStocks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStocks);
    }, 500); // Simulate network delay
  });
};
