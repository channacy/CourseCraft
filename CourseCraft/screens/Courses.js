import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import MainContainer from './MainContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function CoursesScreen({navigation}) {

  return (
    <Text>Courses</Text>

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