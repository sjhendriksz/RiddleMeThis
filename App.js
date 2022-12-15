// Import react
import React, { useState, useEffect } from 'react';

// Orientation
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

// Import navigation stack
import NavStack from './src/navigation/navigation';

// Import data functions
import { GetRiddleData } from './src/hooks/api';

export default function App() {

  const [riddleData, setRiddleData] = useState(null);
  const [loadingRiddle, setLoadingRiddleData] = useState(true);
  const [riddleSolved, setRiddleSolved] = useState(false);
  const { landscape } = useDeviceOrientation();
  console.log(landscape);

  useEffect(() => {

    // Get the Riddle information
    if (riddleData == null && riddleSolved == false) {
      GetRiddleData(setRiddleData, setLoadingRiddleData, setRiddleSolved);
    } else if (riddleSolved == true) {
      GetRiddleData(setRiddleData, setLoadingRiddleData, setRiddleSolved);
    }

  }, []);

  // Loading and waiting for all data calls to complete
  return (
    <NavStack
      riddleData={riddleData}
      setRiddleData={setRiddleData}
      loadingRiddle={loadingRiddle}
      setLoadingRiddleData={setLoadingRiddleData}
      riddleSolved={riddleSolved}
      setRiddleSolved={setRiddleSolved}
    />
  );

}
