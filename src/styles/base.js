// Import the required styles
import darkMode from '../theme/darkModeColors';
import lightMode from '../theme/lightModeColors';
import { StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

// Styles
const baseStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 16,
        justifyContent: "center",
        alignItems: 'flex-start',
        backgroundColor: darkMode.backgroundColor,
    },

    // Riddle screen components styling
    title: {
        flex:1,
        width: "100%",
    },
    question: {
        flex:4,
        width: "100%",
    },
    bottom: {
        flex:1,
        justifyContent: "center",
        width: "100%",
    },

    // Homescreen component styling
    textHeading: {
        color: darkMode.textPrimary,
        fontSize: 30,
        fontWeight: "bold",
        margin: 10,
    },
    textTitle: {
        color: darkMode.textPrimary,
        fontSize: 20,
        margin: 10,
        padding: 20,
    },
    top: {
        flex:1,
        justifyContent: "center",
        width: "100%",
    },
    mid: {
        flex:4,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    bot: {
        flex:1,
        justifyContent: "center",
        width: "100%",
    },

    // Common button style accross app
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

    // White text on a dark background
    textPrimary: {
        color: darkMode.textPrimary,
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    }

});

export default baseStyle;

