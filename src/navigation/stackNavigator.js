import React from 'react';

// Native navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HomeStack = createNativeStackNavigator();

// Import screens
import RiddleScreen from '../screens/riddleScreen';
import SolveScreen from '../screens/solveScreen';
import HomeScreen from '../screens/homeScreen';

// Navstack for homescreen
export default function HomeStackScreen(props) {

    const riddleData = props.riddleData;
    const setRiddleData = props.setRiddleData;
    const loadingRiddle = props.loadingRiddle;
    const setLoadingRiddleData = props.setLoadingRiddleData;
    const riddleSolved = props.riddleSolved;
    const setRiddleSolved = props.setRiddleSolved;

    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>

            <HomeStack.Screen name="Home Stack" >
                {(props) => <HomeScreen
                    {...props}
                    riddleData={riddleData}
                    loadingRiddle={loadingRiddle}
                />
                }
            </HomeStack.Screen>

            <HomeStack.Screen name="Riddle Stack" >
                {(props) => <RiddleScreen
                    {...props}
                    riddleData={riddleData}
                />
                }
            </HomeStack.Screen>

            <HomeStack.Screen name="Solve Stack" >
                {(props) => <SolveScreen
                    {...props}
                    riddleData={riddleData}
                    setRiddleData={setRiddleData}
                    riddleSolved={riddleSolved}
                    setLoadingRiddleData={setLoadingRiddleData}
                    setRiddleSolved={setRiddleSolved}
                />
                }
            </HomeStack.Screen>

        </HomeStack.Navigator>
    );
}