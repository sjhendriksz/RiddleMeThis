import React from 'react';
import { Dimensions } from 'react-native';

const apiNinjasKey = "AAcAJx2mUbTUPkR4byMMvg==qUrKhHNO9P2GCPMx";

// Get the Riddle data
export const GetRiddleData = async (setRiddleData, setLoadingRiddleData, setRiddleSolved) => {
  console.log("GetRiddleData");

  try {
    const response = await fetch('https://api.api-ninjas.com/v1/riddles',
      {
        method: 'GET',
        headers: {
          'Value': apiNinjasKey
        }
      });
    const json = await response.json();
    console.log("Function GetRiddleData...");
    console.log(json[0]);

    // Convert the answer to an itteratable string
    const answerArray = json[0].answer.split("");
    // Create empty array for manipulated data
    const hiddenAnswer = [];

    // Itterate over the answer and manipulate string data so it's hidden.
    for (var i = 0; i < answerArray.length; i++) {
      if (answerArray[i] == " ") {
        hiddenAnswer.push(" ");
      }
      // Special characters
      else if (answerArray[i] == "?") {
        hiddenAnswer.push("?");
      } else if (answerArray[i] == "!") {
        hiddenAnswer.push("!");
      } else if (answerArray[i] == ".") {
        hiddenAnswer.push(".");
      } else if (answerArray[i] == ",") {
        hiddenAnswer.push(",");
      } else if (answerArray[i] == "'") {
        hiddenAnswer.push("'");
      } else if (answerArray[i] == "*") {
        hiddenAnswer.push("*");
        // Numbers
      } else if (answerArray[i] == "0") {
        hiddenAnswer.push("0");
      } else if (answerArray[i] == "1") {
        hiddenAnswer.push("1");
      } else if (answerArray[i] == "2") {
        hiddenAnswer.push("2");
      } else if (answerArray[i] == "3") {
        hiddenAnswer.push("3");
      } else if (answerArray[i] == "4") {
        hiddenAnswer.push("4");
      } else if (answerArray[i] == "5") {
        hiddenAnswer.push("5");
      } else if (answerArray[i] == "6") {
        hiddenAnswer.push("6");
      } else if (answerArray[i] == "7") {
        hiddenAnswer.push("7");
      } else if (answerArray[i] == "8") {
        hiddenAnswer.push("8");
      } else if (answerArray[i] == "9") {
        hiddenAnswer.push("9");
        // If none of the above, push an underscore
      } else {
        hiddenAnswer.push("_");
      }
    }

    // Add hidden answer data to the returned json data
    json[0].hiddenAnswer = hiddenAnswer;
    console.log(json[0])

    // Save the json data for use in the app.
    setRiddleData(json[0]);

  } catch (error) {
    console.error(error);
  } finally {
    setLoadingRiddleData(false);
    setRiddleSolved(false);
  }
}
