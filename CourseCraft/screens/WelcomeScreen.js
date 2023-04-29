import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/creativity.png")} style={styles.img}></Image>
      <Text>CourseCraft</Text>
      <Text> Welcome to CourseCraft – where education is redefined. Let the adventure begin!</Text>
      <View style={styles.btn}>
        <Button style={styles.btn} color="#ffffff" title="Get Started"  onPress={() =>
        navigation.navigate('Login')
      }></Button>
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