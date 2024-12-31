import React from "react";
import { StyleSheet, Text, Button, Dimensions, TouchableHighlight, } from "react-native";

export default props => {

    const stylesButton = [styles.buttom]
    if (props.double) stylesButton.push(styles.buttondouble)
    if (props.triple) stylesButton.push(styles.buttontriple)
    if(props.operation) stylesButton.push(styles.operationbutton)

    return (
        <TouchableHighlight onPress={()=> props.onClick(props.label)} >
            <Text style={stylesButton} >
                {props.label}
            </Text>
        </TouchableHighlight>

    )
}

const styles = StyleSheet.create({
    buttom: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationbutton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttondouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttontriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})
