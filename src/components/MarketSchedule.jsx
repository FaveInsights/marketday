import React, { useState, useEffect } from "react";

const MarketSchedule = () => {
  // Define the market sequence explicitly
  const marketSequence = [
    ["Offa", "Otun-Ekiti", "Eruku"], // Day 0
    ["Obada", "Oro"], // Day 1
    ["Omu-Aran", "Ganmo", "Osi", "Egbe"], // Day 2
    ["Iloffa", "Kajola", "Ayedun"], // Day 3
  ];

  // Track the current day in the sequence
  const [currentDayIndex, setCurrentDayIndex] = useState(2);

  // Get today's and tomorrow's markets
  const todayMarkets = marketSequence[currentDayIndex];
  const tomorrowMarkets = marketSequence[(currentDayIndex + 1) % marketSequence.length];


  // -------------------------------- OLD UPDATE STARTS--------------------------------------//
  // Simulate the passage of time (e.g., update the day every 24 hours)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentDayIndex((prevIndex) => (prevIndex + 1) % marketSequence.length); // Advance the day
  //    }, 24 * 60 * 60 * 1000); // 24 hours

  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, []);
// -------------------------------- OLD UPDATE ENDS--------------------------------------//
  useEffect(() => {
    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0); // Set time to midnight
  
    const timeUntilNextDay = nextDay - now;
  
    const interval = setInterval(() => {
      setCurrentDayIndex((prevIndex) => (prevIndex + 1) % marketSequence.length);
    }, timeUntilNextDay);
  
    return () => clearInterval(interval);
  }, []);
  
  // -------------------------------- NEW UPDATE ENDS--------------------------------------//

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

export default MarketSchedule;