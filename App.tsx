import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  //data-type
  //string
  const [name, setName] = useState<string>("Viet anh123");
  const [age, setAge] = useState<number>(26);
  const [person, setPerson] = useState({
    name: "Việt Anh",
    age: 25,
  });

  //object, array...
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, color: "red" }}>Việt Anh!...</Text>
      <Text style={{ fontSize: 20 }}>{name}</Text>
      <TextInput
        onChangeText={value => setName(value)}
        value={name}
        autoCapitalize="none"
        autoCorrect={true}
        // keyboardType="numeric"
        // maxLength={2}
        // multiline
        style={{ borderColor: "violet", borderWidth: 1, padding: 10 }}
      />
      <Text style={styles.text}>{age}</Text>
      <Text style={styles.text}>
        {JSON.stringify(person)}
        <Text style={styles.textGreen}>Test 123</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
  textGreen: {
    color: "green",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
    width: "100%"
    
  },
});
