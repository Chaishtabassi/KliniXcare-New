import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native'
import React,{useState} from 'react'
import OTPTextView from 'react-native-otp-textinput';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Otpscreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  const handlePinChange = (text) => {
    setOtp(text);
  };  

  const verifyOTP = async () => {
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
                "otpcode":'1234'

            }),
            redirect: 'follow'
        };

        const response = await fetch("https://www.hopsclinics.com/software/api/auth/verifyotp", requestOptions);
        const result = await response.text();
        console.log(result);

        if (response.status === 200) {
            const responseData = JSON.parse(result);
            console.log('Response Data:', responseData);

            if (responseData.message === "OTP matched") {
                Toast.show({
                    text1: "successfully verify your phonenumber",
                    type: 'success',
                    position: 'top',
                    visibilityTime: 3000,
                });
                navigation.navigate('pin');
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
    };

  return (
    <ImageBackground
      source={require('../Assets/background.png')}
      style={{ flex: 1, backgroundColor: '#fafafa', justifyContent: 'center', paddingHorizontal: 30 }}>

      <View>
        <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>Enter your OTP code here.</Text>

        <View style={styles.pinInputContainer}>
          <OTPTextView
            containerStyle={styles.otpContainer}
            textInputStyle={styles.pinInput}
            handleTextChange={(text) => handlePinChange(text)}
            numberOfInputs={6}
            inputCellLength={1}
            inputContainerStyles={styles.inputContainer}
          />
        </View>

        <View style={{ marginTop: 10 }}>
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
           onPress={verifyOTP}
          />
        </View>

      </View>
    </ImageBackground>
  )
}

export default Otpscreen

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