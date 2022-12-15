// Import required components
import { Text, View, TouchableOpacity } from 'react-native';

// Import required styles
import styles from '../styles/styles';

// Home Screen
export default function HomeScreen(props) {

    const riddleData = props.riddleData;
    const loadingRiddle = props.loadingRiddle;

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                {/* placeholder */}
            </View>
            <View style={styles.midHome}>
                <Text style={styles.textHeading1}>{riddleData == null ? "Error:" : loadingRiddle == true ? "Wait:" : "Riddle Me This ..."}</Text>
                <Text style={styles.textTitle}>{riddleData == null ? "Error loading the data ..." : loadingRiddle == true ? "Busy Loading ..." : "A Riddle a day, keeps boredom at bay."}</Text>
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