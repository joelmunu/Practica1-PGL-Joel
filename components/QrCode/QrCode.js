import { StyleSheet, View } from 'react-native';
import React from 'react'
import QRCode from 'react-native-qrcode-svg'

export default function QrCode({link}) {
    return (
      <View style={styles.container}>
        <QRCode value={link}/>
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