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
            'Value': 'AAcAJx2mUbTUPkR4byMMvg==qUrKhHNO9P2GCPMx'
        },
        body: data
    });
    const json = await response.json();
    console.log("Function GetRiddleData...");
    // console.log(json);
    setRiddleData(json);
  } catch (error) {
    console.error(error);
  } finally {
    setLoadingRiddleData(false);
  }
}



// fetchData = async() => {
//     var data = new FormData();

//     fetch('https://api.api-ninjas.com/v1/riddles',
//     {
//         method: 'GET', 
//         headers:{
//             'Value': 'AAcAJx2mUbTUPkR4byMMvg==qUrKhHNO9P2GCPMx'
//         },
//         body: data
//     })
//     .then((response) => response.json())
//     .then((responseJson) => {
//         alert(responseJson.detail)
//     }).catch((error) => {
//         alert('error')
//     })
// }