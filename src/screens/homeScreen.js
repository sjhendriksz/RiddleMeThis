// Import required components
import {Text, View, TouchableOpacity } from 'react-native';

// Import required styles
import styles from '../styles/styles';

// Home Screen
export default function HomeScreen(props){

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                {/* placeholder */}
            </View>
            <View style={styles.midHome}>
                <Text style={styles.textHeading1}>Riddle Me This ...</Text>
                <Text style={styles.textTitle}>A Riddle a day, keeps boredom at bay.</Text>
            </View>
            <View style={styles.bot}>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => props.navigation.navigate('Riddle')}
                >
                    <Text style={styles.btnText}>Give me a Riddle</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}