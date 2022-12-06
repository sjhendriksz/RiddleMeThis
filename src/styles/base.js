// Import the required styles
import darkMode from '../theme/darkModeColors';
import lightMode from '../theme/lightModeColors';
import { StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 16,
        justifyContent: "center",
        alignItems: 'flex-start',
        backgroundColor: darkMode.backgroundColor,
    },
    title: {
        flex:1,
        width: "100%",
    },
    question: {
        flex:4,
        width: "100%",
    },
    answer: {
        flex:1,
        justifyContent: "center",
        width: "100%",
    },
    btn: {
        alignItems: "center",
        padding: 16,
        backgroundColor: darkMode.secondary,
        borderRadius: 10,
    },
    btnText: {
        fontSize: 20,
        color: darkMode.textTertiary,
        fontWeight: "bold",
    },
    textPrimary: {
        color: darkMode.textPrimary,
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    }

});

export default styles;

