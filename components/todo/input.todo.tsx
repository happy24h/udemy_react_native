import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MineButton from "../button/mine.button";

const styles = StyleSheet.create({
  todoInput: {
    borderColor: "violet",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

interface IProps {
  addTodo: (v: string) => void;
}

function InputTodo(props: IProps) {
  const { addTodo } = props;
  const [name, setName] = useState<string>("");

  const handleAddNewTodo = () => {
    addTodo(name);
    setName("");
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        onChangeText={(value) => setName(value)}
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.todoInput}
      />

      {/* <Button title="Add New" color={"blue"} onPress={handleAddNewTodo} /> */}
      <MineButton title="Add New" onPress={handleAddNewTodo}/>
    </View>
  );
}

export default InputTodo;
