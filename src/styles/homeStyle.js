// Import the required styles
import darkMode from '../theme/darkModeColors';
import lightMode from '../theme/lightModeColors';
import { StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

// Styles
const homeScreenStyles = StyleSheet.create({
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
});

export default homeScreenStyles;