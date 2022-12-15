import React from 'react';

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
import RiddleScreen from '../screens/riddleScreen';
import SolveScreen from '../screens/solveScreen';
import HomeScreen from '../screens/homeScreen';
import SettingsScreen from '../screens/settingsScreen';

const NavStack = (props) => {

    const riddleData = props.riddleData;
    const setRiddleData = props.setRiddleData;
    const loadingRiddle = props.loadingRiddle;
    const setLoadingRiddleData = props.setLoadingRiddleData;
    const riddleSolved = props.riddleSolved;
    const setRiddleSolved = props.setRiddleSolved;

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
                            riddleData={riddleData}
                            loadingRiddle={loadingRiddle}
                        />
                        }
                    </Tab.Screen>
                    <Tab.Screen name="Riddle" >
                        {(props) => <RiddleScreen
                            {...props}
                            riddleData={riddleData}
                        />
                        }
                    </Tab.Screen>
                    <Tab.Screen name="Solve" >
                        {(props) => <SolveScreen
                            {...props}
                            riddleData={riddleData}
                            setRiddleData={setRiddleData}
                            riddleSolved={riddleSolved}
                            setLoadingRiddleData={setLoadingRiddleData}
                            setRiddleSolved={setRiddleSolved}
                        />
                        }
                    </Tab.Screen>
                    <Tab.Screen name="Settings" >
                        {(props) => <SettingsScreen
                            {...props}
                        />
                        }
                    </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )

};

export default NavStack;