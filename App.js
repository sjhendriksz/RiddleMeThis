import { Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';

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
  const [loadingRiddle, setLoadingRiddleData] = useState(null);
  const {landscape} = useDeviceOrientation();
  console.log(landscape);

  useEffect(() => {
    
    // Get the Riddle information
    GetRiddleData(setRiddleData, setLoadingRiddleData);

  }, []);

  // An error occured
  if(riddleData == null){
    console.log("Error while loading");
    return (
      <View style={styles.container}>
        <Text>An error occured</Text>
      </View>
    );
  }

  // Busy loading
  else if(loadingRiddle){
    console.log("Busy loading");
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Loading and waiting for all data calls to complete
  else {
    console.log("Show text");
    return (
      <NavStack 
        riddleData = {riddleData}
      />
    );
  }

}
