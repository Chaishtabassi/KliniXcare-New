import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loginscreen = ({navigation}) => {

  const Login = async () => {
    const storedDeviceToken = await AsyncStorage.getItem('phoneNumber');
    const storedPin = await AsyncStorage.getItem('userPin');
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
                "password": storedPin
            }),
            redirect: 'follow'
        };

        const response = await fetch("https://www.hopsclinics.com/software/api/auth/loginRegister", requestOptions);
        const result = await response.text();
        console.log(result);

        if (response.status === 200) {
            const responseData = JSON.parse(result);
            console.log('Response Data:', responseData);

            if (responseData.message === "Successfully login.") {
                Toast.show({
                    text1: "Login successfully",
                    type: 'success',
                    position: 'top',
                    visibilityTime: 3000,
                });
                navigation.navigate('bottom');
            } else {
                Toast.show({
                    text1: responseData.message,
                    type: 'error',
                    position: 'top',
                    visibilityTime: 3000,
                });
            }
        } else {
            Toast.show({
                text1: "Please check your credentials",
                type: 'error',
                position: 'top',
                visibilityTime: 3000,
            });
        }
    } catch (error) {
        console.error('Error:', error);
    }
};


  return (
    <ImageBackground
      source={require('../Assets/background.png')}
      style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
        <Image
          style={{ width: 150, height: 30, alignSelf: 'center', marginBottom: 20 }}
          source={require('../Assets/Logo.png')}
        />

        <View style={{ alignItems: 'center' }}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.icon}
              source={require('../Assets/ic_user.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#040404"
              keyboardType="default"
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              style={styles.icon}
              source={require('../Assets/ic_lock_filled.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#040404"
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <Image
                style={styles.eyeIcon}
                source={require('../Assets/eye_grey.png')}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={Login}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookAppointmentButton}>
            <Text style={{ color: 'black', fontSize: 13,fontWeight:'500' }}>Add Appointments</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={{ color: 'black', fontSize: 13,fontWeight:'500' }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={{ alignItems: 'center', marginBottom: 10 }}>
        <Text style={{ color: 'white' }}>Privacy Policy</Text>
      </View> */}

      <TouchableOpacity style={styles.changeUrlButton}>
        {/* <Text style={{ color: 'white' }}>Change URL</Text> */}
        <Text style={{ color: 'white'}}>Privacy Policy</Text>
        <Image
          style={{ width: 25, height: 25, marginLeft: 5 }}
          source={require('../Assets/ic_web_yellow.png')}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = {
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#ececec',
    maxWidth: 270, 
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#040404',
    fontSize: 17,
  },
  eyeIcon: {
    width: 30,
    height: 30,
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#3399fe',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderRadius: 5,
    alignSelf: 'center',
    maxWidth: 270, 
  },
  bookAppointmentButton: {
    width: '100%',
    height: 35,
    backgroundColor: '#f0eeef',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 18,
    alignSelf: 'center',
    width:'40%', 
  },
  forgotPasswordButton: {
    width: '100%',
    height:35,
    backgroundColor: '#f0eeef',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 18,
    alignSelf: 'center', 
    width:'40%', 
  },
  changeUrlButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    margin: 10,
    justifyContent: 'space-between',
  },
};
export default Loginscreen;
