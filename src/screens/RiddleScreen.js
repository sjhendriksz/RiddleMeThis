// Import required components
import {Text, View, TouchableOpacity } from 'react-native';

// Import required styles
import baseStyle from '../styles/base'

// Home Screen
export default function RiddleScreen(props){

    const riddleData = props.riddleData;

    return(
        <View style={baseStyle.container}>
            <View style={baseStyle.title}>
                <Text style={baseStyle.textPrimary}>Title: {riddleData?.title}</Text>
            </View>
            <View style={baseStyle.question}>
                <Text style={baseStyle.textPrimary}>{riddleData?.question}</Text>
            </View>
            <View style={baseStyle.bottom}>
                <TouchableOpacity 
                style={baseStyle.btn}
                onPress={() => props.navigation.navigate('Solve')}
                >
                    <Text style={baseStyle.btnText}>Solve</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}