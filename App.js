import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.welcome, {backgroundColor: 'blue'}, {color:'white'}, {flex: 1}]}></Text>
      <Text style={[styles.welcome, {backgroundColor: 'white'}, {flex: 1}]}></Text>
      <Text style={[styles.welcome, {backgroundColor: 'red'}, {flex: 3}]}></Text>
      <Text style={[styles.welcome, {backgroundColor: 'white'}, {flex: 1}]}></Text>
      <Text style={[styles.welcome, {backgroundColor: 'blue'}, {color:'white'}, {flex: 1}]}></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    alignItems: 'center',
  }, 
});
