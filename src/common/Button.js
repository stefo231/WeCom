import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles
    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonStyle}
        >
            {children}
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        //borderWidth: 1,
        marginBottom: 30,
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30

    }
}
export default Button