import { StyleSheet, Text, View } from 'react-native';

export default function Body() {
  return (
    <View style={styles.container}>
        <Text style={styles.body}>
            Mi nombre es Joel Munuera Marrero, actualmente me encuentro estudiando el segundo curso del <Text style={styles.bold}>
            CFGS DAM </Text><Text style={styles.grey}>(Desarrollo de aplicaciones Multiplataforma)</Text> en el colegio <Text style={styles.italic}>
            Salesianos La Cuesta</Text>. Donde también cursé el <Text style={styles.bold}>CFGM SMR</Text>.
        </Text>
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

  body: {
    padding: 20,
    textAlign: 'justify',
    lineHeight: 30
  },

  italic: {
    fontStyle: 'italic'
  },

  grey: {
    color: 'grey'
  },

  bold: {
    fontWeight: 'bold'
  }
});