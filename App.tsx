import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  //data-type
  //string
  const [name, setName] = useState<string>("Viet anh");
  const [age, setAge] = useState<number>(26);
  const [person, setPerson] = useState({
    name: "Hoidanit",
    age: 25,
  });

  //object, array...
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, color: "red"}}>Việt Anh!...</Text>
      <Text style={{fontSize: 20}}>{name}</Text>
      <Text style={styles.text}>{age}</Text>
      <Text style={styles.text}>{JSON.stringify(person)}
        <Text style={styles.textGreen} >Test 123</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red"
  },
  textGreen: {
    color: "green"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20
  },
});
