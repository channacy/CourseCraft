import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function LoginScreen() {
const [number, onChangeNumber] = useState('');
  return (
    
    <View style={styles.container}>
      <Image source={require("../assets/creativity.png")} style={styles.img}></Image>
      <Text>Enter your number: </Text>
      <TextInput style={styles.input} value={number} placeholder="123456789" onChangeText={onChangeNumber} maxLength={11}></TextInput>
      <View style={styles.btn}>
        <Button style={styles.btn}  color="#FFFFFF" title="Continue"></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    marginTop: 20,
    backgroundColor: "#4C76EF",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: "#000000",
  },

});