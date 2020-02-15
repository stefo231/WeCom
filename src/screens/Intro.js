import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

import Scroller from '../scroller/Scroller'

const Intro = ({navigation}) => {

    return (
      <ImageBackground source={require('../../assets/bkg1.png')} style={styles.imgBckgr}>
        <View style={styles.container}>
          <Scroller />

          <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
            <Text style={styles.skipStyle}>Skip></Text>
          </TouchableOpacity>

          <Text style={styles.pcSign}> powered by: PortComSign</Text>

        </View>
      </ImageBackground>
    )
}

export default Intro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBckgr: {
    flex:1,
    alignSelf:'stretch',
    width: null,
    height: null,
    //width: Dimensions.get('window').width,
    //height: Dimensions.get('window').height,
  },
  pcSign: {

    marginBottom: 50,
    color: 'white',
    fontSize: 18,
    fontWeight: '700'
  },
  skipStyle: {
    marginBottom: 5,
    color: 'white',
    fontSize: 16,
    fontWeight: '500',

  }
});
