/**
 * QR card
 * https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={style.body}>
      <Image
        style={style.img_code}
        source={require('../QRchallenge/src/assets/image-qr-code.png')}>
      </Image>
      <Text style={style.titulo}>
        Improve your front-end skills by building projects
      </Text>
      <Text style={style.texto}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </Text>
    </View>

  )
}

const style = StyleSheet.create({
  img_code: {
    paddingTop: 10,
    marginTop: 23,
    marginLeft: 33,
    width: 310,
    height: 320,
    borderRadius: 20
  },
  body: {
    marginTop: 70,
    marginBottom: 70,
    marginLeft: 18,
    marginRight: 18,
    flex: 1,
    borderRadius: 20,
    backgroundColor: "white"
  },
  titulo: {
    marginTop: 12,
    fontWeight: "700",
    fontWeight: "bold",
    fontSize: 21,
    textAlign: 'center',
    color: 'hsl(218, 44%, 22%)',
  },
  texto: {
    marginTop: 6,
    fontSize: 19,
    textAlign: 'center',
    padding: 14,
    color: 'hsl(220, 15%, 55%)'
  }
})
