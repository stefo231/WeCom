import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export class SignOne extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> This is Component {this.constructor.name} </Text>
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.navigate('MenuScreen')}
                />
            </View>
        )
    }
}

export default SignOne
