import { StyleSheet, View } from "react-native";
import InputTodo from "./components/todo/input.todo";
import { useState } from "react";
import ListTodo from "./components/todo/list.todo";
import FlexBox from "./components/todo/flexbox";

export default function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addTodo = (title: string) => {
    const todo = { id: randomInteger(1, 1000000), title: title };
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (id: number) => {
    const newTodo = todoList.filter(todo => todo.id != id);
    setTodoList(newTodo);
  }
  
  return (
   
    <View style={styles.container}>
      <FlexBox/>
      <View style={{marginTop: 30}}>
      <InputTodo addTodo={addTodo} />
      <ListTodo todoList={todoList} deleteTodo={deleteTodo} />

      </View>
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
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
    // marginTop: 50,
  },
});
