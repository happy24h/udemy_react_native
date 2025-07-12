// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Đây là trang home</Text>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate("Details", { userId: 1, name: "Eric" })
          }
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="GO USER ID = 1"
          onPress={() =>
            navigation.navigate("Details", { userId: 2, name: "Viet Anh" })
          }
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="GO USER ID = 2"
          onPress={() =>
            navigation.navigate("Details", { userId: 3, name: "Văn Huy" })
          }
        />
      </View>
    </View>
  );
}

function DetailsScreen(props: any) {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  console.log("check route >>>", route?.params);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>User id = {route?.params?.userId}</Text>
      <Text>User name = {route?.params?.name}</Text>
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
      <Stack.Navigator   screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Trang chủ",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => <Button color={"gray"} title="Đăng nhập" />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={(props: any) => ({
            headerTitle: `Xem chi tiết ${props.route?.params?.userId ?? ""}`,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
