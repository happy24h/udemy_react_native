import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

function FlexBox() {
  return (
    <View style={styles.container}>
      <Text>flex box</Text>
    </View>
  );
}

export default FlexBox;
