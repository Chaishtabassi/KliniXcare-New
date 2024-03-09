import { Text, View } from 'react-native'
import React, { Component } from 'react'
import firebase from '@react-native-firebase/app';
import Rootnavigator from './Src/Navigation/Rootnavigator'
import Toast from 'react-native-toast-message';

const firebaseConfig = {
  apiKey: "AIzaSyDqIWAtVbM5NzUL9JcoLP7noXaAk-9cHD0",
  authDomain: "smarthospital-99e50.firebaseapp.com",
  // databaseURL: "https://klinixcarepatient.firebaseio.com",
  projectId: "smarthospital-99e50",
  storageBucket: "smarthospital-99e50.appspot.com",
  messagingSenderId: "1074865362029",
  appId: "1:1074865362029:android:07696f495101e55405db64",
};


export class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Rootnavigator />
      <Toast/>
    </View>
    )
  }
}

export default App