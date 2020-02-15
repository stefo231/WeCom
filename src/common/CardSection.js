import React from 'react';
import { View, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
const CardSection = (props) => {
    return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: width, height: height }}>
        <View style={styles.containerStyle}>
            {props.children}
        </View>
        </View>

    );
};

const styles = {
    containerStyle: {

        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ddd',
        position: 'relative',
        marginBottom: height * 0.1,
        marginTop: height * 0.1,
        marginLeft: width *0.03,
        marginRight: width *0.03,
        borderRadius: 20
    }
};

export default CardSection;
