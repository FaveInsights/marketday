import React, { useState, useEffect } from "react";

const MarketSchedule = () => {
  // Define the markets and their open days in the 5-day cycle
  const markets = [
    { name: "Offa", openDay: 0 }, // Day 0
    { name: "Otun-Ekiti", openDay: 0 }, // Day 0
    { name: "Eruku", openDay: 0 }, // Day 0
    { name: "Obada", openDay: 1 }, // Day 1
    { name: "Oro", openDay: 1 }, // Day 1
    { name: "Omu-Aran", openDay: 2 }, // Day 2
    { name: "Ganmo", openDay: 2 }, // Day 2
    { name: "Osi", openDay: 2 }, // Day 2
    { name: "Egbe", openDay: 2 }, // Day 2
    { name: "Iloffa", openDay: 3 }, // Day 3
    { name: "Kajola", openDay: 3 }, // Day 3
    { name: "Ayedun", openDay: 3 }, // Day 3
  ];

  // Track the current day in the 5-day cycle
  const [currentCycleDay, setCurrentCycleDay] = useState(1); // Start at Day 1 (Oro and Obada)

  // Get markets for a specific day in the 5-day cycle
  const getMarketsForDay = (day) => {
    return markets.filter((market) => market.openDay === day % 5);
  };

  // Get today's and tomorrow's markets
  const todayMarkets = getMarketsForDay(currentCycleDay);
  const tomorrowMarkets = getMarketsForDay(currentCycleDay + 1);

  // Simulate the passage of time (e.g., update the cycle day every 24 hours)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCycleDay((prevDay) => (prevDay + 1) % 5); // Advance the cycle day
    }, 24 * 60 * 60 * 1000); // 24 hours

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Market Days</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Today's Markets:</h2>
        <ul className="list-disc pl-5">
          {todayMarkets.map((market, index) => (
            <li key={index} className="text-gray-700">
              {market.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Tomorrow's Markets:</h2>
        <ul className="list-disc pl-5">
          {tomorrowMarkets.map((market, index) => (
            <li key={index} className="text-gray-700">
              {market.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketSchedule;