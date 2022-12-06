// import {StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation';
// Navigator
// import { NavigationContainer } from '@react-navigation/native';
// Native navigator
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RiddleScreen  from '../screens/riddleScreen';
import SolveScreen from '../screens/solveScreen';
import React from 'react';

const Navigation=createNativeStackNavigator({
    Riddle: {
        screen: RiddleScreen,
    },
    Solve: {
        screen: SolveScreen,
    },
});

export default Navigation;