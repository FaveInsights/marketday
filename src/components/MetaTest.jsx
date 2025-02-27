import React, { useState, useEffect } from 'react';

const App = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  useEffect(() => {
    const initialTriggerTime = new Date();
    initialTriggerTime.setHours(14, 23, 0, 0); 

    const now = new Date();
    const timeUntilInitialTrigger = initialTriggerTime - now;

    setTimeout(() => {
      setCurrentDayIndex(1);

      const intervalId = setInterval(() => {
        setCurrentDayIndex((prevIndex) => (prevIndex + 1) % 4);
      }, 60000);

      return () => clearInterval(intervalId);
    }, timeUntilInitialTrigger);
  }, []);

  return (
    <div>
      <p>Current Day Index: {currentDayIndex}</p>
    </div>
  );
};

export default App;
