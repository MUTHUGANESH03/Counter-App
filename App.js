import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const[count, setCount]=useState(0);
  const increment = ()=> {
    setCount(count+1);
  }
  const decrement =()=>{
    setCount(count-1);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={increment}title='Increment'/>
        <Button onPress={decrement}title='Decrement'/>
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
  text: {
    fontSize: 70,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    width: '80%',
    justifyContent: 'space-around'

  }
});
