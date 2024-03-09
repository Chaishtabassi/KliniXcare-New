import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native'
import React, { useState, useRef,useEffect } from 'react';
import PhoneInput
    from 'react-native-phone-input';
import CountryPicker
    from 'react-native-country-picker-modal';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const Phonenumber = ({navigation}) => {
  const [deviceToken, setDeviceToken] = useState('');

  useEffect(() => {
    const initializeFirebaseMessaging = async () => {
      try {
        await messaging().requestPermission();
        const token = await messaging().getToken();
        console.log('Device Token:', token);
        setDeviceToken(token);
        await AsyncStorage.setItem('deviceToken', token);
      } catch (error) {
        console.error('Error getting device token:', error);
      }
    };
  
    initializeFirebaseMessaging();
  }, []);

  const Phonenumberverify = async () => {
    const storedDeviceToken = await AsyncStorage.getItem('deviceToken');
    try {
        const phoneNumberWithoutCountryCode = phoneInputValue.replace('+' + phoneRef.current.getCountryCode(), '');

        const requestOptions = {
            method: 'POST',
            headers: {
                "Client-Service": "smarthospital",
                "Auth-Key": "hospitalAdmin@",
                "Content-Type": "application/json",
                "Cookie": "ci_session=bq8bliauvsul3fs7bslch6oj8r20fg7n"
            },
            body: JSON.stringify({
                "identity": phoneNumberWithoutCountryCode,
                "deviceToken": storedDeviceToken
            }),
            redirect: 'follow'
        };

        const response = await fetch("https://www.hopsclinics.com/software/api/auth/loginRegister", requestOptions);
        const result = await response.text();
        console.log(result);

        if (response.status === 200) {
            const responseData = JSON.parse(result);
            console.log('Response Data:', responseData);
            await AsyncStorage.setItem('phoneNumber', phoneNumberWithoutCountryCode);

            if (responseData.message === "User already register please verify") {
                Toast.show({
                    text1: responseData.message,
                    type: 'success',
                    position: 'top',
                    visibilityTime: 3000,
                });
                navigation.navigate('otp');
            } else if (responseData.message === "User already register please send pin!") {
                Toast.show({
                    text1: "User already register",
                    type: 'success',
                    position: 'top',
                    visibilityTime: 3000,
                });
                navigation.navigate('Login'); 
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


    const [countryCode, setCountryCode] = useState('PH');

    const [countryPickerVisible, setCountryPickerVisible] =
        useState(false);

    const phoneRef = useRef(null);
    const [phoneInputValue, setPhoneInputValue] = useState('');
    const [cca2, setCca2] = useState('PH');

    const onPressFlag = () => {
        setCountryPickerVisible(!countryPickerVisible);
    };

    const onSelectCountry = (country) => {
        phoneRef.current.selectCountry(country.cca2.toLowerCase());
        setCca2(country.cca2);
    };

    const onPhoneInputChange = (value, iso2) => {
        setPhoneInputValue(value);

        if (iso2) {
            setCountryCode(iso2.toUpperCase());
        }
    };

    return (
        <ImageBackground
            source={require('../Assets/background.png')}
            style={{ flex: 1, backgroundColor: '#fafafa' }}>
            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 30 }}>
                <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>
                    Enter your phone number:
                </Text>
                <View style={{ marginTop: 10 }}>
                    <PhoneInput
                        style={{
                            height: 40,
                            fontSize: 16,
                            paddingHorizontal: 10, backgroundColor: '#ffff'
                        }}
                        ref={phoneRef}
                        onPressFlag={onPressFlag}
                        initialCountry={countryCode}
                        onChangePhoneNumber={onPhoneInputChange}
                        textProps={{
                            placeholder: 'Phone Number',
                        }}
                    />
                    {countryPickerVisible && (
                        <CountryPicker
                            withFilter={true}
                            withFlagButton={false}
                            withCountryNameButton={false}
                            onSelect={onSelectCountry}
                            onClose={() => setCountryPickerVisible(false)}
                            visible={countryPickerVisible}
                            containerButtonStyle={styles.countryPickerButton}
                            closeButtonImageStyle={styles.countryPickerCloseButton}
                        />
                    )}
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
                        onPress={Phonenumberverify}
                    />
                </View>


            </View>
        </ImageBackground>
    )
}

export default Phonenumber

const styles = StyleSheet.create({
    phoneInput: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    countryButton: {
        marginBottom: 20,
    },
    countryPickerButton: {
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    countryPickerCloseButton: {
        width: 20,
        height: 20,
    },
})
