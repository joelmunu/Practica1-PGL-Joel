import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import QrCode from './components/QrCode/QrCode';

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header}></Header>
      <Body style={styles.body}></Body>
      <QrCode style={styles.qrcode} link={'https://github.com/joelmunu/Practica1-PGL-Joel'}/>
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
  },

  qrcode: {
    flex: 2
  }
});
