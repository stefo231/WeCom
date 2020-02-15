import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import CardSection from '../common/CardSection'

const Scr3 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CardSection>
                <Image
                    source={require('../../assets/icons/Logo_final_1.png')}
                    style={styles.imgLogo}
                />
                <Text style={styles.textPosition}>
                    За преведување на знаковен{'\n'}
                    јазик во глас притиснете го{'\n'}
                    копчето за снимање на движењата.{'\n'}
                    Разбирливо покажете ги знаците.{'\n'}
                    Не брзајте .Апликацијата{'\n'}
                    ќе го преведе истото во глас.{'\n'}
                </Text>
                <Image
                    source={require('../../assets/icons/handwave.png')}
                    style={styles.imgHandWave}
                />
            </CardSection>
        </View>
    )
}

export default Scr3

const styles = StyleSheet.create({
    imgLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1.5,
        resizeMode: 'contain',
    },
    imgHandWave: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 0.7,
        resizeMode: 'contain',
        margin: 20,
    },
    textPosition: {
        flex: 1,
        margin: 10,
        padding: 10,
        fontSize: 12,
        color: 'grey',
        flexWrap: 'wrap'
    },
});