// Import required components
import { Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Import required styles
import styles from '../styles/styles'

// Home Screen
export default function GameOverScreen(props) {

    const setTries = props.setTries;

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.textHeading2}>Game Over.</Text>
            </View>

            <View style={styles.mid}>
                <ScrollView vertrical>
                    <Text style={styles.textTitle}>You're out of tries. Press the button below to try again.</Text>
                </ScrollView>
            </View>

            <View style={styles.bot}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate('Riddle');
                        setTries(5);
                    }}
                >
                    <Text style={styles.btnText}>Try Again</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}