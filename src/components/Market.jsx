
import React, { useState, useEffect } from "react";

const Market = () => {
  const marketSequence = [
    ["Offa", "Otun-Ekiti", "Eruku"], 
    ["Obada", "Oro"], 
    ["Omu-Aran", "Ganmo", "Osi", "Egbe"], 
    ["Iloffa", "Kajola", "Ayedun"]
  ];

  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const todayMarkets = marketSequence[currentDayIndex];
  const tomorrowMarkets = marketSequence[(currentDayIndex + 1) % marketSequence.length];

  useEffect(() => {
    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);

    const timeUntilNextDay = nextDay - now;

    const interval = setInterval(() => {
      setCurrentDayIndex((prevIndex) => (prevIndex + 1) % marketSequence.length);
    }, timeUntilNextDay);

    return () => clearInterval(interval);
  }, [marketSequence]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Market Days</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Today's Markets:</h2>
        <ul className="list-disc pl-5">
          {todayMarkets.map((market, index) => (
            <li key={index} className="text-gray-700">
              {market}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Tomorrow's Markets:</h2>
        <ul className="list-disc pl-5">
          {tomorrowMarkets.map((market, index) => (
            <li key={index} className="text-gray-700">
              {market}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Market;
