import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import OTPTextView from 'react-native-otp-textinput';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Pinscreen = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const [enteredPin, setEnteredPin] = useState('');

  const handlePinChange = (text) => {
    setPin(text);
  };

  const handlePinChang = (text) => {
    setEnteredPin(text)
  };

  const savePin = async () => {
    try {
      await AsyncStorage.setItem('userPin', enteredPin);
      // You can also add some success handling or navigation here if needed.
    } catch (error) {
      console.error('Error saving PIN:', error);
      // Handle the error appropriately.
    }
  };

  const Done = async () => {
    try {
      if (enteredPin.length === 4 && pin.length === 4) {
        if (enteredPin == pin) {
          // Both PINs match
          if (checkpin) {
            if (enteredPin === savedpin && pin === savedpin) {
              // navigation.navigate('bottom');
            } else {
              console.error('Incorrect PIN entered.');
            }
          } else {
            // Save PIN and call API
            savePin();
            await Pinverify();
          }
        } else {
          // Show an error message because the PINs do not match
          Toast.show({
            text1: 'PINs do not match. Please try again.',
            type: 'error',
          });
        }
      } else {
        // Show an error message because one or both PINs are not entered
        Toast.show({
          text1: 'Please enter both PINs.',
          type: 'error',
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    storedpin();
  }, []);

  let checkpin = false;
  let savedpin = '';

  const storedpin = async () => {
    const storedPin = await AsyncStorage.getItem('userPin');
    console.log(storedPin);
    if (storedPin !== null) {
      checkpin = true;
      savedpin = storedPin;
    }
  };

  const Pinverify = async () => {
    const storedDeviceToken = await AsyncStorage.getItem('phoneNumber');
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          "Client-Service": "smarthospital",
          "Auth-Key": "hospitalAdmin@",
          "Content-Type": "application/json",
          "Cookie": "ci_session=bq8bliauvsul3fs7bslch6oj8r20fg7n"
        },
        body: JSON.stringify({
          "identity": storedDeviceToken,
          "password": enteredPin,
          "confirm_password": pin,
          "is_verify": 1,
        }),
        redirect: 'follow'
      };

      const response = await fetch("https://www.hopsclinics.com/software/api/auth/setPin", requestOptions);
      const result = await response.text();
      console.log(result);

      if (response.status === 200) {
        const responseData = JSON.parse(result);
        console.log('Response Data:', responseData);

        if (responseData.message === "Pin set succesfully") {
          Toast.show({
            text1: "Congratulations, your registration has been successfully completed",
            type: 'success',
            position: 'top',
            visibilityTime: 3000,
          });
          navigation.navigate('bottom');
        } else {
          Toast.show({
            text1: responseData.message,
            type: 'success',
            position: 'top',
            visibilityTime: 3000,
          });
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <ImageBackground
      source={require('../Assets/background.png')}
      style={{ flex: 1, backgroundColor: '#fafafa', justifyContent: 'center', paddingHorizontal: 30 }}>

      <View>
        <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>Please enter your new 4-digit Pin.</Text>

        <View style={styles.pinInputContainer}>
          <OTPTextView
            containerStyle={styles.otpContainer}
            textInputStyle={styles.pinInput}
            handleTextChange={(text) => handlePinChange(text)}
            numberOfInputs={4}
            inputCellLength={1}
            inputContainerStyles={styles.inputContainer}
          />
        </View>

<View style={{top:10}}>
<Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>Please confirm your new 4-digit Pin.</Text>

<View style={styles.pinInputContainer}>
  <OTPTextView
    containerStyle={styles.otpContainer}
    textInputStyle={styles.pinInput}
    handleTextChange={(text) => handlePinChang(text)}
    numberOfInputs={4}
    inputCellLength={1}
    inputContainerStyles={styles.inputContainer}
  />
</View>
</View>
   



        <View style={{ marginTop: 20 }}>
          <Button
            title="Submit"
            style={{
              width: '100%',
              height: 40,
              marginTop: 40,
              backgroundColor: '#3399FF',
              borderRadius: 5,
            }}
            textStyle={{ fontWeight: 'bold', color: '#FFFFFF' }}
            onPress={Done}
          />
        </View>

      </View>
    </ImageBackground>
  )
}

export default Pinscreen

const styles = StyleSheet.create({
  pinInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  otpContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pinInput: {
    flex: 1,
    height: 50,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    textAlign: 'center',
  },
})