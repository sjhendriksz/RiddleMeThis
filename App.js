import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';

// Import data functions
import { GetRiddleData } from './src/hooks/api';

export default function App() {

  const [riddleData, setRiddleData] = useState(null);
  const [loadingRiddle, setLoadingRiddleData] = useState(null);

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
      <View style={styles.container}>
        <Text>Title: {riddleData.title}</Text>
        <Text>Question: {riddleData.question}</Text>
        <Text>Answer: {riddleData.answer}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
