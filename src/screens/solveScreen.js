// Import required components
import React, { useState } from 'react';
import { Text, View, TextInput, Keyboard, TouchableOpacity, ScrollView } from 'react-native';

// Import required styles
import styles from '../styles/styles'

// Import required components
import { SolveRiddleView } from '../components/solveRiddleViewComp';

// Import data functions
import { GetRiddleData } from '../hooks/api';

// Import confetti cannon
import ConfettiCannon from 'react-native-confetti-cannon';

// Answer Screen
export default function SolveScreen(props) {

    // get the data through the props and isolate hiddenAnswer for use on this page.
    const riddleData = props.riddleData;
    const setRiddleData = props.setRiddleData;
    const setLoadingRiddleData = props.setLoadingRiddleData;
    const riddleSolved = props.riddleSolved;
    const setRiddleSolved = props.setRiddleSolved;
    const tries = props.tries;
    const setTries = props.setTries;

    const answer = props.riddleData.answer;
    const hiddenAnswerTemp = riddleData.hiddenAnswer;
    const [hiddenAnswer, sethiddenAnswer] = useState(hiddenAnswerTemp);

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

            {
                // Busy solving the riddle and have enough tries left
                riddleSolved == false && tries > 0 ?
                    <View style={styles.innerContainer}>
                        <View style={styles.top}>
                            <Text style={styles.textTitle}>Chances Remaining: {tries}</Text>
                        </View>
                        <SolveRiddleView hiddenAnswer={hiddenAnswer} />
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
                    </View>

                    // Riddle solved information
                    : riddleSolved == true && tries > 0 ?
                        <View style={styles.innerContainer}>
                            <ConfettiCannon
                                count={200}
                                origin={{ x: -10, y: 0 }}
                                explosionSpeed={400}
                                fadeOut={true}
                            />
                            <View style={styles.top}>
                                <Text style={styles.textHeading2}>You solved it, congrats.</Text>
                            </View>

                            <View style={styles.mid}>
                                <ScrollView vertrical>
                                    <Text style={styles.textTitle}>Question: {riddleData?.question}</Text>
                                    <Text style={styles.textTitle}>Answer: {riddleData?.answer}</Text>
                                </ScrollView>
                            </View>

                            <View style={styles.bot}>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => {
                                        props.navigation.navigate('Riddle');
                                        if (riddleSolved == true) {
                                            GetRiddleData(setRiddleData, setLoadingRiddleData, setRiddleSolved);
                                        }
                                    }}
                                >
                                    <Text style={styles.btnText}>Get a New Riddle</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :

                        // Game over information
                        <View style={styles.innerContainer}>
                            <View style={styles.top}>
                                <Text style={styles.textHeading2}>Game Over.</Text>
                            </View>

                            <View style={styles.mid}>
                                <ScrollView vertrical>
                                    <Text style={styles.textTitle}>You're out of tries. Press the button below to try again.</Text>
                                </ScrollView>
                            </View>

                            <View style={styles.bot}>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => {
                                        props.navigation.navigate('Riddle');
                                        setTries(5);
                                    }}
                                >
                                    <Text style={styles.btnText}>Try Again</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
            }

        </View>
    )

}