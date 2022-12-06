// Import required components
import {Text, View, TouchableOpacity } from 'react-native';

// Import required styles
import styles from '../styles/base'

// Home Screen
export default function RiddleScreen(props){

    const riddleData = props.riddleData;

    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textPrimary}>Title: {riddleData?.title}</Text>
            </View>
            <View style={styles.question}>
                <Text style={styles.textPrimary}>{riddleData?.question}</Text>
            </View>
            <View style={styles.answer}>
                <TouchableOpacity 
                style={styles.btn}
                >
                    <Text style={styles.btnText}>Solve</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}