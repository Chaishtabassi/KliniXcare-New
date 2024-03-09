import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Drawernavigation from '../Navigation/Drawernavigation';

const Header = () => {
  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDrawerToggle}>
        <Image style={{height:18,width:30,resizeMode:'contain'}} source={require('../Assets/header.png')} />
      </TouchableOpacity>

      <Image style={{height:35,width:100,}} source={require('../Assets/Logo.png')} />

      <Image style={{height:20,width:20}} source={require('../Assets/notification.png')} />

      {isDrawerOpen && <Drawernavigation onClose={handleDrawerToggle} navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:'#3399fe',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 7, 
  },
});

export default Header;