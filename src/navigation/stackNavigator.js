import React from 'react';

// Native navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const StackNav = createNativeStackNavigator();

// Import screens
import SolveScreen from '../screens/solveScreen';
import SolvedScreen from '../screens/solvedScreen';
import GameOverScreen from '../screens/gameOverScreen';

// Navstack for homescreen
export default function StackNavScreen(props) {

    const riddleData = props.riddleData;
    const setRiddleData = props.setRiddleData;
    const loadingRiddle = props.loadingRiddle;
    const setLoadingRiddleData = props.setLoadingRiddleData;
    const riddleSolved = props.riddleSolved;
    const setRiddleSolved = props.setRiddleSolved;
    const tries = props.tries;
    const setTries = props.setTries;

    return (
        <StackNav.Navigator screenOptions={{ headerShown: false }}>

            <StackNav.Screen name="SolveStack" >
                {(props) => <SolveScreen
                    {...props}
                    riddleData={riddleData}
                    setRiddleData={setRiddleData}
                    riddleSolved={riddleSolved}
                    setLoadingRiddleData={setLoadingRiddleData}
                    setRiddleSolved={setRiddleSolved}
                    tries={tries}
                    setTries={setTries}
                />
                }
            </StackNav.Screen>

            <StackNav.Screen name="SolvedStack" >
                {(props) => <SolvedScreen
                    {...props}
                    riddleData={riddleData}
                />
                }
            </StackNav.Screen>

            <StackNav.Screen name="GameOver" >
                {(props) => <GameOverScreen
                    {...props}
                    setTries={setTries}
                />
                }
            </StackNav.Screen>

        </StackNav.Navigator>
    );
}