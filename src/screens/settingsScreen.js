// Import required components
import {Text, View, TouchableOpacity } from 'react-native';

// Import required styles
import styles from '../styles/styles';

// Home Screen
export default function SettingsScreen(props){

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.textHeading2}>Top Score: 50</Text>
            </View>
            <View style={styles.mid}>
                <Text style={styles.textHeading2}>App Settings:</Text>
            </View>
            <View style={styles.bot}>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => props.navigation.navigate('Home')}
                >
                    <Text style={styles.btnText}>Home</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}