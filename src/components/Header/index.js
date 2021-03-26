import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../Menu';



export default function Header() {
    return (
        <View style={styles.cointainer}>
            <Menu />
            <Text style={styles.title}> EventApp </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cointainer: {
        flex: 1,
        position: 'absolute',

        marginTop: -725,
        width: 430,
        height: 100,
        backgroundColor: '#4D76E1',
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color:'#fff',
        marginLeft: 150,
        marginTop: 40,
    }
})