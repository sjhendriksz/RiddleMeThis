// Import required components
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView, Keyboard } from 'react-native';

// Import required styles
import styles from '../styles/styles'

// Answer Screen
export default function SolveScreen(props){

    // const answer = riddleData.answer.split(""); Changed string to itterable string data for use on line 38, now commented.
    
    // get the data through the props and isolate hiddenAnswer for use on this page.
    const riddleData = props.riddleData;
    const answer = props.riddleData.answer
    const hiddenAnswer = riddleData.hiddenAnswer;
    
    // number of tries a user is allowed.
    const [tries, setTries] = useState(5);
    // save text from TextInput so it can be checked if the character is in the answer. 
    const [text, setText] = useState("");

    function handleKeyDown({nativeEvent}) {

        console.log("handleKeyDown function: " + nativeEvent.key);

        // only run when the return or enter key is pressed
        if(nativeEvent.key !== "Backspace" && nativeEvent.key !== "handleKeyDown" && nativeEvent.key !== " "){
            // check if player still has tries left

            // counters will keep count of matches found and unsolved characters.
            var countTries = 0;
            var countUnsolvedCharacters = 0;

            // loop through all the letters and compare if any matches. 
            for(var i = 0; i < answer.length; i++){
                // replace unsolved characters
                if(answer[i].toLowerCase() == nativeEvent.key.toLowerCase()){
                    hiddenAnswer[i] = nativeEvent.key.toUpperCase();
                    countTries++;
                }
                // count unsolved characters
                if(hiddenAnswer[i] == "_"){
                    countUnsolvedCharacters++;
                }
            }

            // if wrong letter was chosen, deduct one try
            if(countTries == 0){
                setTries(tries - 1);
            }
            console.log("Tries left: " + tries);

            // riddle has been solved
            if(countUnsolvedCharacters == 0){
                console.log("Riddle solved");
                // hide keyboard
                Keyboard.dismiss();
            }
            console.log("unsolved characters: " + countUnsolvedCharacters);

        }
        else{
            console.log("Filtered key: " + nativeEvent.key);
        }

    }

    return(
        <View style={styles.container}>

            <View style={styles.top}>
                <Text style={styles.textTitle}>Chances Remaining: {tries}</Text>
            </View>

            <View style={{flex:4}}>
                <ScrollView>
                    <View style={{flex:1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", width: "100%",}}>
                    {hiddenAnswer.map((letter, index) => (    
                        // <Text key={index} style={{margin: 2, padding: 2, color: "white", fontSize: 26}}>{letter==" " ? "  " : letter=="." ? "." : letter=="?" ? "?" : "_" }</Text>
                        <Text key={index} style={{margin: 2, padding: 2, color: "white", fontSize: 26}}>{letter}</Text>
                    ))}
                    </View>
                </ScrollView>
            </View>
            
            <View 
                style={[styles.bot, {backgroundColor: "grey", padding: 0, borderRadius: 10}]}
                // key={hiddenAnswer}
            >
                <TextInput
                    style={[{borderColor:"black", borderWidth: 1, color: "white", fontSize:20, height: "100%", textAlign: "center", borderRadius: 10}]}
                    onChangeText={setText}
                    // onSubmitEditing={onSubmitFunction({text})}
                    keyboardType="default"
                    // returnKeyType="done"
                    // onKeyPress={ ({nativeEvent}) => console.log(nativeEvent.key) }
                    onKeyPress={({nativeEvent}) => handleKeyDown({nativeEvent})}
                    value={text}
                    placeholder="Solve the answer"
                    maxLength={20}
                />
            </View>

        </View>
    )

}