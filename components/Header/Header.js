import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require("./img/pic.jpg")}/>
        <Text style={styles.name}>Joel Munuera Marrero</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 150,
      width: '100%',
      backgroundColor: 'lemonchiffon',
      alignItems: 'center',

    },

    img: {
       width: 80,
       height: 80,
       borderRadius: 50,
       marginLeft: 15,
       marginTop: 20,
       marginRight: 40
    },

    name: {
        color: 'deepskyblue',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25
    }
  });