// Import the required styles
import { StyleSheet} from 'react-native';
import colors from '../theme/colors';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 16,
        justifyContent: "center",
        alignItems: 'flex-start',
        backgroundColor: colors.backgroundColor,
    },

    // Homescreen, Riddlescreen component styling
    textHeading1: {
        color: colors.textPrimary,
        fontSize: 30,
        fontWeight: "bold",
        margin: 10,
        padding:10,
    },
    textHeading2: {
        color: colors.textPrimary,
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
        padding:10,
    },
    textTitle: {
        color: colors.textPrimary,
        fontSize: 20,
        margin: 10,
        padding: 20,
    },
    top: {
        flex:1,
        justifyContent: "center",
        width: "100%",
    },
    midHome: {
        flex:4,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    mid: {
        flex:4,
        justifyContent: "flex-start",
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
        backgroundColor: colors.secondary,
        borderRadius: 10,
    },
    btnText: {
        fontSize: 20,
        color: colors.textTertiary,
        fontWeight: "bold",
    },

    // White text on a dark background
    textPrimary: {
        color: colors.textPrimary,
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },

    // Solve screen text input style
    textInput: {
        borderColor:colors.borderColor,
        borderWidth: 1,
        color: colors.textPrimary,
        fontSize:20,
        height: "100%",
        textAlign: "center",
        borderRadius: 10
    }

});

export default styles;

