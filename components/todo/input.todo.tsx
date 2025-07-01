import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todoInput: {
    borderColor: "violet",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

function InputTodo() {
  const [name, setName] = useState<string>("Viet anh123");

  return (
    <View>
      <TextInput
        onChangeText={(value) => setName(value)}
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.todoInput}
      />

      <Button title="Add New" color={"blue"} onPress={() => alert("tap me")} />
    </View>
  );
}

export default InputTodo;
