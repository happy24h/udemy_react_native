import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, color: "red"}}>Việt Anh!...</Text>
      <Text style={{fontSize: 20}}>Hello world</Text>
      <Text style={styles.text}>View text</Text>
      <Text style={styles.text}>Hoidanit
        <Text style={styles.textGreen} >Test 123</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red"
  },
  textGreen: {
    color: "green"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
