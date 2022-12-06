// Import required components
import {Text, View, TouchableOpacity } from 'react-native';

// Import required styles
import baseStyle from '../styles/base';

// Home Screen
export default function SettingsScreen(props){

    return(
        <View style={baseStyle.container}>
            <View style={baseStyle.top}>
                <Text style={baseStyle.textHeading}>Top Score:</Text>
                <Text style={baseStyle.textTitle}>50</Text>
            </View>
            <View style={baseStyle.mid}>
                <Text style={baseStyle.textHeading}>App Settings:</Text>
            </View>
            <View style={baseStyle.bot}>
                <TouchableOpacity 
                style={baseStyle.btn}
                onPress={() => props.navigation.navigate('Home')}
                >
                    <Text style={baseStyle.btnText}>Home</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}