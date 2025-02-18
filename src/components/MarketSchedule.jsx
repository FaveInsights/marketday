import React from "react";

const MarketSchedule = () => {

    const markets = [
        {name: "Obada", openDay: 2+1},
        {name: "Oro", openDay: 2+1},
        {name: "Omu-Aran", openDay:3+1},
        {name: "Osi", openDay: 3+1},
        {name: "Iloffa", openDay: 0+1},
        {name: "Kajola", openDay: 0+1},
        {name: "Offa", openDay: 1+1},
        {name: "Egbe", openDay: 3+1},
        {name: "Ganmo", openDay: 3+1},
        {name: "Otun-Ekiti", openDay: 1+1},
        {name: "Ayedun", openDay: 0+1},
        {name: "Eruku", openDay: 1+1}
      ];
      
      const getCurrentDay = () => {
        return new Date().getDay();
      };
      
      const getMarketsForDay = (day) => {
        return markets.filter((market) => market.openDay === day % 5);
      };
      
  const currentDay = getCurrentDay();
  const todayMarkets = getMarketsForDay(currentDay);
  const tomorrowMarkets = getMarketsForDay(currentDay + 1);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Market Days</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Today's Markets:</h2>
        <ul className="list-disc pl-5">
          {todayMarkets.map((market, index) => (
            <li key={index} className="text-gray-700">{market.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Tomorrow's Markets:</h2>
        <ul className="list-disc pl-5">
          {tomorrowMarkets.map((market, index) => (
            <li key={index} className="text-gray-700">{market.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketSchedule;