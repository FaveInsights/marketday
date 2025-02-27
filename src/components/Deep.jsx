import React, { useState, useEffect } from 'react';

const Deep = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const marketSequence = [
    ["Omu-Aran", "Ganmo", "Osi", "Egbe"],
    ["Iloffa", "Kajola", "Ayedun"],
    ["Offa", "Otun-Ekiti", "Eruku"], 
    ["Obada", "Oro"]
  ];

  useEffect(() => {
    // Function to calculate the current day index (0 for Monday, 1 for Tuesday, etc.)
    const getCurrentDayIndex = () => {
      const today = new Date();
      const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
      return (dayOfWeek + 6) % 7; // Convert to 0 (Monday) to 6 (Sunday), then modulo 4
    };

    // Set the initial day index
    setCurrentDayIndex(getCurrentDayIndex());

    // Function to update the day index at midnight
    const updateDayIndex = () => {
      setCurrentDayIndex((prevIndex) => (prevIndex + 1) % 4); // Cycle through 0, 1, 2, 3
    };

    // Calculate the time until the next midnight
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Set to next midnight
    const timeUntilMidnight = midnight - now;

    // Set a timeout to start the interval at midnight
    const timeoutId = setTimeout(() => {
      updateDayIndex(); // Update immediately at midnight
      const intervalId = setInterval(updateDayIndex, 24 * 60 * 60 * 1000); // Update every 24 hours
      return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, timeUntilMidnight);

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <p>Current Day Index: {currentDayIndex}</p>
      <div>
        Today's Markets:
        {currentDayIndex == 0 ? marketSequence[0] :
        currentDayIndex == 1 ? marketSequence[1]:
        currentDayIndex == 2 ? marketSequence[2]:
        currentDayIndex == 3 ? marketSequence[3]:
        null}
      </div>
    </div>
  );
};

export default Deep;