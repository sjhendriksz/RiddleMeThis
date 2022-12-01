// Import the required styles
import darkMode from '../theme/darkModeColors';
import lightMode from '../theme/lightModeColors';
import { StyleSheet} from 'react-native';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: 'flex-start',
        backgroundColor: darkMode.backgroundColor,
    },
    textPrimary: {
        color: darkMode.textPrimary,
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    }

});

export default styles;

