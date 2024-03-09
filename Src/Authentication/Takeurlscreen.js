import { StyleSheet, Text, ImageBackground,View,Button,Image ,TextInput} from 'react-native'
import React from 'react'

const Takeurlscreen = ({navigation}) => {
  return (
    <ImageBackground
    source={require('../Assets/background.png')}
    style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <Image
        source={require('../Assets/doctors.png')}
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          marginTop: 150,
        }}
      />
      <View
        style={{
          paddingHorizontal: 30,
          flexDirection:'column',
          height:'17%',
          justifyContent:'space-between'
        }}>
        <View
          style={{
            width: '100%',
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Assets/internet.png')}
            style={{
              width: 20,
              height: 20,
              marginHorizontal: 10,
              tintColor: '#000000', 
            }}
          />
          <TextInput
            style={{
              flex: 1,
              height: 40,
              fontSize: 16,
              paddingHorizontal: 10,
            }}
            placeholder="Domain"
            placeholderTextColor="#CCCCCC"
            keyboardType="url"
          />
        </View>
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
          onPress={() => {
            navigation.navigate('phonenumber');
          }}
        />
      </View>
    </ImageBackground>
  )
}

export default Takeurlscreen

const styles = StyleSheet.create({})