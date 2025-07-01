import React, { useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 15,
  },
});

interface IProps {
  todoList: ITodo[];
}

function ListTodo(props: IProps) {
  const { todoList } = props;

  return (
    <>
      <FlatList
        style={{ marginTop: 20, borderColor: "red", borderWidth: 1 }}
        data={todoList}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          {
            return (
              <Text key={item.id} style={styles.todo}>
                {item.title}
              </Text>
            );
          }
        }}
      />
    </>
  );
}

export default ListTodo;
