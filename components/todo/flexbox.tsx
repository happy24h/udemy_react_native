import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  //default: display flex => column
  container: {
    flex: 1,
    marginTop: 40,
    borderWidth: 1,
    // borderColor: "red",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",

  },
  item1: {
    borderWidth: 1,
    flex: 1,
    backgroundColor: "violet",
    padding: 20,
    height: 150
  },
  item2: {
    flex: 2,
    padding: 20,
    borderWidth: 1,
    backgroundColor: "green",
    height: 250
  },
  item3: {
    flex: 3,
    padding: 20,
    borderWidth: 1,
    backgroundColor: "orange",
    height: 350
  },
  item4: {
    flex: 4,
    padding: 20,
    borderWidth: 1,
    backgroundColor: "grey",
    height: 450
  },
});

// height, width <div></div>
function FlexBox() {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.item2}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.item3}>
        <Text>Item 3</Text>
      </View>
      <View style={styles.item4}>
        <Text>Item 4</Text>
      </View>
    </View>
  );
}

export default FlexBox;
