import React from 'react';

// Navigator
import { NavigationContainer } from '@react-navigation/native';
// Native navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Icons for use with the navigator
import Ionicons from 'react-native-vector-icons/Ionicons';

// Safearea library
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Import screens
import RiddleScreen from '../screens/riddleScreen';
import SolveScreen from '../screens/solveScreen';
import HomeScreen from '../screens/homeScreen';
import SettingsScreen from '../screens/settingsScreen';
import WordDefinitionScreen from '../screens/wordDefinitionScreen';

// The NavStack functional component
const NavStack = (props) => {

    // const riddleData = props.riddleData;
    // const setRiddleData = props.setRiddleData;
    // const loadingRiddle = props.loadingRiddle;
    // const setLoadingRiddleData = props.setLoadingRiddleData;
    // const riddleSolved = props.riddleSolved;
    // const setRiddleSolved = props.setRiddleSolved;

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="Home"
                    >
                        {(props) => <HomeScreen
                            {...props}
                        // riddleData={riddleData}
                        // loadingRiddle={loadingRiddle}
                        />
                        }
                    </Stack.Screen>
                    <Stack.Screen
                        name="Definition"
                    >
                        {(props) => <WordDefinitionScreen
                            {...props}
                        />
                        }
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )

};

export default NavStack;