import { StyleSheet, Text, View } from 'react-native';

export default function Body() {
  return (
    <View style={styles.container}>
        <Text>Body</Text>
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
});