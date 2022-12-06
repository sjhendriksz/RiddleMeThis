import { Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';

// Navigator
import { NavigationContainer } from '@react-navigation/native';
// Native navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// Icons for use with the navigator
import Ionicons from 'react-native-vector-icons/Ionicons';

// Safearea library
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import RiddleScreen from './src/screens/riddleScreen';
import SolveScreen from './src/screens/solveScreen';
import HomeScreen from './src/screens/homeScreen';
import SettingsScreen from './src/screens/settingsScreen';

// Import styles
import styles from './src/styles/styles';

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
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              headerShown: true,
              tabBarStyle: { 
                height: 70,
                paddingBottom: 10,
                paddingTop: 10,
              },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Riddle') {
                  iconName = focused ? 'play-circle' : 'play-circle-outline';
                } else if (route.name === 'Solve') {
                  iconName = focused ? 'help-circle' : 'help-circle-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'list-circle' : 'list-circle-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: '#333',
            })}
            
          >
            <Tab.Screen  
              name="Home"
            >
              {(props) => <HomeScreen 
                  {...props}
                />
              }
            </Tab.Screen>
            <Tab.Screen  name="Riddle" >
              {(props) => <RiddleScreen 
                  {...props} 
                  riddleData={riddleData} 
                />
              }
            </Tab.Screen>
            <Tab.Screen  name="Solve" >
              {(props) => <SolveScreen 
                  {...props}
                  riddleData={riddleData}
                />
              }
            </Tab.Screen>
            <Tab.Screen  name="Settings" >
              {(props) => <SettingsScreen 
                  {...props}
                />
              }
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }

}
