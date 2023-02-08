import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

const Header = (props) => {
    return(
        <View style={styles.view}>
            <Text style={styles.text_put}>
                React Native Tutorial
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        backgroundColor: '#00f',
        justifyContent: 'center',
        alighItem: 'center',

    },
    text_put: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 25,
        textAlign:'center',
    }
})

export default Header