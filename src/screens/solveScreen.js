// Import required components
import React, { useState } from 'react';
import { Text, View, TextInput, Keyboard, TouchableOpacity } from 'react-native';

// Import required styles
import styles from '../styles/styles'

// Import required components
import { SolveRiddleView } from '../components/solveRiddleViewComp';

// Import data functions
import { GetRiddleData } from '../hooks/api';


// Answer Screen
export default function SolveScreen(props) {

    // get the data through the props and isolate hiddenAnswer for use on this page.
    const riddleData = props.riddleData;
    const setRiddleData = props.setRiddleData;
    const setLoadingRiddleData = props.setLoadingRiddleData;
    const riddleSolved = props.riddleSolved;
    const setRiddleSolved = props.setRiddleSolved;


    const answer = props.riddleData.answer;
    const hiddenAnswerTemp = riddleData.hiddenAnswer;
    const [hiddenAnswer, sethiddenAnswer] = useState(hiddenAnswerTemp);

    // number of tries a user is allowed.
    const [tries, setTries] = useState(5);
    // save text from TextInput so it can be checked if the character is in the answer. 
    const [text, setText] = useState("");

    // process the selected key
    function handleKeyDown({ nativeEvent }) {

        console.log("handleKeyDown function: " + nativeEvent.key);

        // check if player still has tries left
        if (tries > 0 && riddleSolved == false) {

            // only run when the return or enter key is pressed
            if (nativeEvent.key !== "Backspace" && nativeEvent.key !== " ") {

                // counters will keep count of matches found and unsolved characters.
                var countTries = 0;
                var countUnsolvedCharacters = 0;

                // loop through all the letters and compare if any matches. 
                for (var i = 0; i < answer.length; i++) {
                    // check if typed character has already been solved

                    // replace unsolved characters
                    if (answer[i].toLowerCase() == nativeEvent.key.toLowerCase()) {
                        hiddenAnswerTemp[i] = nativeEvent.key.toUpperCase();
                        countTries++;
                    }
                    // count unsolved characters
                    if (hiddenAnswerTemp[i] == "_") {
                        countUnsolvedCharacters++;
                    }
                }
                // set the hidden answer state
                sethiddenAnswer(hiddenAnswerTemp);

                // if wrong letter was chosen, deduct one try
                if (countTries == 0) {
                    setTries(tries - 1);
                }
                console.log("Tries left: " + tries);

                // riddle has been solved
                if (countUnsolvedCharacters == 0) {
                    console.log("Riddle solved");
                    setRiddleSolved(true);
                    // hide keyboard
                    Keyboard.dismiss();
                }
                console.log("unsolved characters: " + countUnsolvedCharacters);

            }
            else {
                console.log("Filtered key: " + nativeEvent.key);
            }

        }
        // game over - no tries left
        else if (tries == 0 && riddleSolved == false) {
            console.log("Game over");
        }
        else if (tries > 0 && riddleSolved == true) {
            console.log("Riddle solved")
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.textTitle}>Chances Remaining: {tries}</Text>
            </View>

            <SolveRiddleView hiddenAnswer={hiddenAnswer} />

            {riddleSolved == false ?
                <View style={[styles.bot, { backgroundColor: "grey", padding: 0, borderRadius: 10 }]} >
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setText}
                        keyboardType="default"
                        onSubmitEditing={() => console.log("return key has been pressed")}
                        onKeyPress={({ nativeEvent }) => handleKeyDown({ nativeEvent })}
                        value={text}
                        placeholder="Solve the answer"
                        maxLength={20}
                    />
                </View>
                :
                <View style={styles.bot}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            props.navigation.navigate('Riddle Stack');
                            if (riddleSolved == true) {
                                GetRiddleData(setRiddleData, setLoadingRiddleData, setRiddleSolved);
                            }
                        }}
                    >
                        <Text style={styles.btnText}>Solved - New Riddle</Text>
                    </TouchableOpacity>
                </View>
            }

        </View>
    )

}