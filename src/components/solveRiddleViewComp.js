// Import required components
import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export const SolveRiddleView = (props) => (
    <View style={{ flex: 4 }} >
        <ScrollView>
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", width: "100%" }}>
                {props.hiddenAnswer.map((letter, index) => (
                    <Text key={index} style={{ margin: 2, padding: 2, color: "white", fontSize: 26 }}>
                        {letter}
                    </Text>
                ))}
            </View>
        </ScrollView>
    </View>
);