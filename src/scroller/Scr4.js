import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import CardSection from '../common/CardSection'

const Scr4 = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
    <CardSection>
          <Image
            source={require('../../assets/icons/Logo_final_1.png')}
            style={styles.imgLogo} />
          <Text style={styles.textPosition}>Можеш да започнеш!</Text>
          </CardSection>
          </View>

  )
}

export default Scr4

const styles = StyleSheet.create({
  imgLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    resizeMode: 'contain',
    margin: 20,
    //marginBottom: 30
  },
  textPosition: {
    flex: 1,
    margin: 10,
    fontSize: 18,
    color: 'grey',
    padding: 10
  }
});