// Home Screen
export default function HomeScreen(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textPrimary}>Title: {riddleData.title}</Text>
            <Text style={styles.textPrimary}>Question: {riddleData.question}</Text>
            <Text style={styles.textPrimary}>Answer: {riddleData.answer}</Text>
        </View>
    )
}