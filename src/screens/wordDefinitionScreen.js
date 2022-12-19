// Import required components
import { Text, View, TouchableOpacity } from 'react-native';

// Import required styles
import styles from '../styles/styles';

// Home Screen
export default function WordDefinitionScreen(props) {

    // const definitionData = props.definitionData;
    // const loadingDefinitionData = props.loadingDefinitionData;

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                {/* placeholder */}
            </View>
            <View style={styles.midHome}>
                <Text style={styles.textHeading1}>
                    Word Definition
                </Text>
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