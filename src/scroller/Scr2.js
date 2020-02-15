import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import CardSection from '../common/CardSection'

const Scr2 = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
    <CardSection>
      <Image
        source={require('../../assets/icons/Logo_final_1.png')}
        style={styles.imgLogo}
      />
      <Text style={styles.textPosition}>
        За преведување на глас во{'\n'}
        знаковен јазик притиснете го{'\n'}
        копчето за прислушување на{'\n'}
        вашиот глас. Јасно и гласно{'\n'}
        изкажете се и апликацијата{'\n'}
        ќе го преведе истото во анимација.
                            </Text>
      <Image
        source={require('../../assets/icons/HeadSpeak.png')}
        style={styles.imgHeadSpeak}
      />
    </CardSection>
    </View>
  )
}

export default Scr2

const styles = StyleSheet.create({
  imgLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
  textPosition: {
    flex: 1,
    margin: 10,
    padding: 10,
    fontSize: 12,
    color: 'grey',
    flexWrap: 'wrap'
  },
  imgHeadSpeak: {
    flex: 1,
    aspectRatio:1.2,
    resizeMode: 'contain',
    margin: 20,
  },
});