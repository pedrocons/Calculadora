import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default props =>
    <View style={styles.display} >
        <Text style={styles.displayvalue} numberOfLines={1} >
            {props.value}
        </Text>
    </View>


const styles = StyleSheet.create({

    display: {
        flex: 2,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',

    },
    displayvalue: {
        fontSize: 60,
        color: '#000',
    }
})