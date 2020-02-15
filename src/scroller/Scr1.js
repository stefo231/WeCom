import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import CardSection from '../common/CardSection'

const Scr1 = () => {
  return (
<View style={{flex:1, justifyContent:'center', alignItems: 'center', flexWrap: 'wrap'}}>
    <CardSection>
      
        <Image
          source={require('../../assets/icons/Logo_final_1.png')}
          style={styles.imgLogo}
        />
      
        <Text style={styles.textPosition}>
          Апликација која ви овозможува{'\n'}
          да комуницирате двонасочно{'\n'}
          на знаковен јазик во реално{'\n'}
          време.{'\n'}{'\n'}

          Поминете низ ова упатство{'\n'}
          за да можете да започнете со{'\n'}
          користење.
             </Text>
      

    </CardSection>
    </View>
  )
}

export default Scr1

const styles = StyleSheet.create({
  imgLogo: {
    flex: 1,
    aspectRatio: 2,
    resizeMode: 'contain',
    margin: 20,
  },
  textPosition: {
    flex: 2,
    padding: 30,
    color: 'grey',
    // flexWrap: 'wrap'
  },
});