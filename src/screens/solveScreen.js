// Import required components
import {Text, View, TouchableOpacity } from 'react-native';

// Import required styles
import styles from '../styles/styles'

// Answer Screen
export default function SolveScreen(props){

    const riddleData = props.riddleData;

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.textHeading2}>Chances Remaining: 5</Text>
            </View>
            <View style={styles.mid}>
                <Text style={styles.textTitle}>Answer: {riddleData?.answer}</Text>
            </View>
            <View style={styles.bot}>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={() => props.navigation.navigate('Riddle')}
                >
                    <Text style={styles.btnText}>Back to Riddle</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}