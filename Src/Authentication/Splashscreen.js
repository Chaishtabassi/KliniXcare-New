import React, { useEffect } from 'react';
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native';

const Splashscreen = ({ navigation }) => {
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      clearTimeout(splashTimeout);
      navigation.navigate('takeurl');
    }, 3000);
    return () => clearTimeout(splashTimeout);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../Assets/background.png')}
      style={styles.mainContainer}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../Assets/Logo.png')} 
        />
      </View>
      <View style={styles.loaderContainer}>
        <Image
          style={styles.loader}
          source={require('../Assets/splash_loader.gif')}
        />
      </View>
      {/* <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0</Text>
      </View> */}
    </ImageBackground>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 100,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  loader: {
    width: 150,
    height: 150,
  },
  versionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  versionText: {
    color: '#000000',
    fontSize: 16,
    backgroundColor: '#CCCCCC',
    padding: 10,
    borderRadius: 10,
  },
});
