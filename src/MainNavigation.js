import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MenuScreen from './screens/MenuScreen';
import Intro from './screens/Intro'

import VoiceOne from './screens/VoiceOne'
import SignOne from './screens/SignOne'

const Stack = createStackNavigator();
class MainNavigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Intro"
                    headerMode="none">
                    <Stack.Screen
                        name="Intro"
                        component={Intro} />
                    <Stack.Screen
                        name='MenuScreen'
                        component={MenuScreen} />
                    <Stack.Screen
                        name='VoiceOne'
                        component={VoiceOne} />
                    <Stack.Screen
                        name='SignOne'
                        component={SignOne} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default MainNavigation