// Import required components
import {Text, View, TouchableOpacity } from 'react-native';

// Import required styles
import baseStyle from '../styles/base';
import homeScreenStyles from '../styles/homeStyle';

// Home Screen
export default function HomeScreen(props){

    return(
        <View style={baseStyle.container}>
            <View style={homeScreenStyles.top}>
                {/* placeholder */}
            </View>
            <View style={homeScreenStyles.mid}>
                <Text style={homeScreenStyles.textHeading}>Riddle Me This ...</Text>
                <Text style={homeScreenStyles.textTitle}>A Riddle a day, keeps boredom at bay.</Text>
            </View>
            <View style={homeScreenStyles.bot}>
                <TouchableOpacity 
                style={baseStyle.btn}
                onPress={() => props.navigation.navigate('Riddle')}
                >
                    <Text style={baseStyle.btnText}>Give a Riddle</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}