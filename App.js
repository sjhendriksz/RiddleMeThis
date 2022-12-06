import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';

// Navigator
import { NavigationContainer } from '@react-navigation/native';
// Native navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Import paper provider for styling
import { Provider as PaperProvider } from 'react-native-paper'

// Safearea library
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Import screens
import RiddleScreen from './src/screens/riddleScreen';
import SolveScreen from './src/screens/solveScreen';
import HomeScreen from './src/screens/homeScreen';
import SettingsScreen from './src/screens/settingsScreen';

// Import styles
import baseStyle from './src/styles/base';

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
      <View style={baseStyle.container}>
        <Text>An error occured</Text>
      </View>
    );
  }
  else if(loadingRiddle){
    console.log("Busy loading");
    return (
      <View style={baseStyle.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  // Loading and waiting for all data calls to complete
  else {
    console.log("Show text");
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen  name="Home" >
              {(props) => <HomeScreen 
                  {...props}
                />
              }
            </Stack.Screen>
            <Stack.Screen  name="Riddle" >
              {(props) => <RiddleScreen 
                  {...props} 
                  riddleData={riddleData} 
                />
              }
            </Stack.Screen>
            <Stack.Screen  name="Solve" >
              {(props) => <SolveScreen 
                  {...props}
                  riddleData={riddleData}
                />
              }
            </Stack.Screen>
            <Stack.Screen  name="Settings" >
              {(props) => <SettingsScreen 
                  {...props}
                />
              }
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }

}
