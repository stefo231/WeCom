import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import Button from '../common/Button'

class MenuScreen extends Component {
    
    render() {
        return (
            <ImageBackground source={require('../../assets/bkg1.png')} style={styles.imgBckgr}>
                <View style={styles.container}>
                    <Image
                        source={require('../../assets/icons/Logo_circle.png')}
                        style={styles.imgLogo}
                    />

                    <Button onPress={() => this.props.navigation.navigate('SignOne')}>
                        <Image
                            source={require('../../assets/icons/mikrofon.png')}
                            style={styles.imgIcon}
                        />
                        <Image
                            source={require('../../assets/icons/prevedi_glas.png')}
                            style={styles.imgText}
                        />

                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('VoiceOne')}>
                        <Image
                            source={require('../../assets/icons/raka.png')}
                            style={styles.imgIcon}
                        />
                        <Image
                            source={require('../../assets/icons/prevedi_znak.png')}
                            style={styles.imgText}
                        />
                    </Button>

                    <Text style={styles.pcSign}> powered by: PortComSign</Text>
                </View>
            </ImageBackground>
        )
    }
}

export default MenuScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgBckgr: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    pcSign: {
        marginBottom: 50,
        color: 'white',
        fontSize: 18
    },
    imgLogo: {
        flex: 2,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        //aspectRatio: 1,
        width: 150,
        height: 150,
        resizeMode: 'contain',
        margin: 20,
        //marginBottom: 20,
        marginTop: 100
    },
    imgIcon: {
        flex: 1,
        width: 60,
        height: 60,
        resizeMode: 'contain',
        margin: 5

    },
    imgText: {
        flex: 4,
        width: 210,
        height: 100,
        resizeMode: 'contain',
        margin: 5

    },

})