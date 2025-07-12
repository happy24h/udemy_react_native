// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from "@expo/vector-icons/Ionicons";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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

function NotificationsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
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
      </Stack.Navigator> */}
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Trang chủ",
          }}
        />
        <Drawer.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerTitle: "Chi tiết" }}
        />
      </Drawer.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "american-football"
                : "american-football-outline";
            } else if (route.name === "Details") {
              iconName = focused ? "aperture" : "aperture-outline";
            }

            // You can return any component that you like here!
            return (
              <Ionicons name={iconName as any} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
