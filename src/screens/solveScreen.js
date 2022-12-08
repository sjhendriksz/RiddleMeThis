// Import required components
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';

// Import required styles
import styles from '../styles/styles'

// Answer Screen
export default function SolveScreen(props){

    const riddleData = props.riddleData;
    const answer = riddleData.answer.split("");
    
    const [tries, setTries] = useState(4);
    const [text, onChangeText] = useState("Solve");

    return(
        <View style={styles.container}>
            
            <View style={styles.top}>
                <Text style={styles.textTitle}>Chances Remaining: {tries}</Text>
            </View>

            <View style={{flex:4, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", width: "100%",}}>
                {answer.map((letter, index) => (    
                    <Text key={index} style={{margin: 2, padding: 2, color: "white", fontSize: 26}}>{letter==" " ? "  " : letter=="." ? "." : "_" }</Text>
                ))}
            </View>
            
            <View style={[styles.bot, {backgroundColor: "grey", padding: 0, borderRadius: 10}]}>
                <TextInput
                    style={[{borderColor:"black", borderWidth: 1, color: "white", fontSize:20, height: "100%", textAlign: "center", borderRadius: 10}]}
                    onChangeText={onChangeText}
                    text={text}
                />
            </View>

        </View>
    )

}