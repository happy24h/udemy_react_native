import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  //data-type
  //string
  const [name, setName] = useState<string>("Viet anh123");
  const [age, setAge] = useState<number>(26);
  const [person, setPerson] = useState({
    name: "Việt Anh",
    age: 25,
  });

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Hỏi Dân IT :v" },
    { id: 6, title: "Watching Youtube" },
    { id: 7, title: "CR 7" },
    { id: 8, title: "Tony Kroos" },
    { id: 9, title: "Nine" },
    { id: 10, title: "M10" },
  ])


  //object, array...
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, color: "red" }}>{name}</Text>
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
      </Text>
        <Button title="Add New" color={"blue"} onPress={() => alert("tap me")} />
          <ScrollView style={{marginTop: 20, borderColor: "red", borderWidth: 1}}>
            {todoList.map((todo, index) => {
              return (
                <Text key={todo.id} style={styles.todo}>
                  {todo.title}
                </Text>
              )
            })}
          </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 15
  },
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
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: 50
    
  },
});
