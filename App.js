import { Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

// Orientation
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

// Import navigation stack
import NavStack from './src/navigation/navigation';

// Import styles
import styles from './src/styles/styles';

// Import data functions
import { GetRiddleData } from './src/hooks/api';

export default function App() {

  const [riddleData, setRiddleData] = useState(null);
  const [loadingRiddle, setLoadingRiddleData] = useState(true);
  const { landscape } = useDeviceOrientation();
  console.log(landscape);

  useEffect(() => {

    // Get the Riddle information
    GetRiddleData(setRiddleData, setLoadingRiddleData);

  }, []);

  // Loading and waiting for all data calls to complete
  return (
    <NavStack
      riddleData={riddleData}
      loadingRiddle={loadingRiddle}
    />
  );

}
