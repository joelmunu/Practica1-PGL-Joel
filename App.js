import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header}></Header>
      <Text style={styles.body}>Body</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 1
  },

  body: {
    flex: 4
  }
});
