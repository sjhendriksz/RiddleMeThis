// Import required components
import {Text, View, TouchableOpacity } from 'react-native';

// Import required styles
import baseStyle from '../styles/base'

// Answer Screen
export default function SolveScreen(props){

    const riddleData = props.riddleData;

    return(
        <View style={baseStyle.container}>
            <View style={baseStyle.title}>
                <Text style={baseStyle.textPrimary}>Chances Remaining: 5</Text>
            </View>
            <View style={baseStyle.question}>
                <Text style={baseStyle.textPrimary}>Answer: {riddleData?.answer}</Text>
            </View>
            <View style={baseStyle.bottom}>
                <TouchableOpacity 
                    style={baseStyle.btn}
                    onPress={() => props.navigation.navigate('Riddle')}
                >
                    <Text style={baseStyle.btnText}>Back to Riddle</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}