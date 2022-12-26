// Import required components
import { Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Import required styles
import styles from '../styles/styles'

// Import data functions
import { GetRiddleData } from '../hooks/api';

// Home Screen
export default function SolvedScreen(props) {

    // get the data through the props and isolate hiddenAnswer for use on this page.
    const riddleData = props.riddleData;
    const setRiddleData = props.setRiddleData;
    const setLoadingRiddleData = props.setLoadingRiddleData;
    const riddleSolved = props.riddleSolved;
    const setRiddleSolved = props.setRiddleSolved;

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.textHeading2}>You solved it, congrats.</Text>
            </View>

            <View style={styles.mid}>
                <ScrollView vertrical>
                    <Text style={styles.textTitle}>Question: {riddleData?.question}</Text>
                    <Text style={styles.textTitle}>Answer: {riddleData?.answer}</Text>
                </ScrollView>
            </View>

            <View style={styles.bot}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate('Solved');
                        if (riddleSolved == true) {
                            GetRiddleData(setRiddleData, setLoadingRiddleData, setRiddleSolved);
                        }
                    }}
                >
                    <Text style={styles.btnText}>Get a New Riddle</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}