import React, { useState, useEffect } from 'react';

const NewDeep = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const marketSequence = [
    ["Obada", "Oro"], // Day 0
    ["Omu-Aran", "Ganmo", "Osi", "Egbe"], // Day 1
    ["Iloffa", "Kajola", "Ayedun"], //Day 2
    ["Offa", "Otun-Ekiti", "Eruku"], // Day 3
  ];


  useEffect(() => {
    // Function to update the day index
    const updateDayIndex = () => {
      setCurrentDayIndex((prevIndex) => (prevIndex + 1) % 4); // Cycle through 0, 1, 2, 3
    };

    // Calculate the time until the next midnight
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(0, 0, 0, 0); // Set to next midnight
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
    <>
    <div className='mt-4'>
      <p>Current Day Index (NewDeep): {currentDayIndex}</p>
    </div>
      <div>
        Today's Markets:
       {currentDayIndex == 0 ? marketSequence[0] :
        currentDayIndex == 1 ? marketSequence[1]:
        currentDayIndex == 2 ? marketSequence[2]:
        currentDayIndex == 3 ? marketSequence[3]:
        null}
      </div>
    </>
  );
};

export default NewDeep;