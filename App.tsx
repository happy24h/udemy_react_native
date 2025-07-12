// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Đây là trang home</Text>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="GO USER ID = 1"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="GO USER ID = 2"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </View>
  );
}

function DetailsScreen() {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>User id = ????</Text>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push("Details")}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
