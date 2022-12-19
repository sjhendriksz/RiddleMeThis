// Import required components
import { Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Import required styles
import styles from '../styles/styles'

// Home Screen
export default function RiddleScreen(props) {

    const riddleData = props.riddleData;

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.textHeading2}>Title: {riddleData?.title}</Text>
            </View>

            <View style={styles.mid}>
                <ScrollView vertrical>
                    <Text style={styles.textTitle}>{riddleData?.question}</Text>
                </ScrollView>
            </View>

            <View style={styles.bot}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => props.navigation.navigate('Solve Stack')}
                >
                    <Text style={styles.btnText}>Solve</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}