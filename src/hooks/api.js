import React from 'react';
import { Dimensions} from 'react-native';

const apiNinjasKey = "AAcAJx2mUbTUPkR4byMMvg==qUrKhHNO9P2GCPMx";

// Get the Riddle data
export const GetRiddleData = async (setRiddleData, setLoadingRiddleData) => {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/riddles',
    {
        method: 'GET', 
        headers:{
            'Value': apiNinjasKey
        }
    });
    const json = await response.json();
    console.log("Function GetRiddleData...");
    console.log(json[0]);
    setRiddleData(json[0]);
  } catch (error) {
    console.error(error);
  } finally {
    setLoadingRiddleData(false);
  }
}
