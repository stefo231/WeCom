import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import CardSection from '../common/CardSection'

const Info = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <CardSection>

                <Image
                    source={require('../../assets/icons/Logo_final_1.png')}
                    style={styles.imgLogo}
                />
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textPosition}>
                        Оваа апликација е создадена
                        како решение на младинскиот
                        предизвик Generation Unlimited
                        поддржан од UNICEF, SmartUp и
                        Telekom MK.
                    </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textPosition}>
                        WeCom е чекор поблиску до
                        активно вклучување на лицата
                        со попреченост во слухот, во
                        образованието и секојдн
                        живот
                    </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textPosition}>
                        Моментално ја користите демо-
                        верзијата, чија цел де тестирање
                        на истата. Во иднина очекувајте
                        измени и напредок
          </Text>
                </View>


            </CardSection>
        </View>
    )
}

export default Info

const styles = StyleSheet.create({
    imgLogo: {
        flex: 1,
        aspectRatio: 2,
        resizeMode: 'contain',
        margin: 20,
    },
    textPosition: {
        flex: 1, 
        flexWrap: 'wrap', 
        padding: 10, 
        color: 'grey'
    },
});