import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

export default function Ingresso() {
    return (
        <View style={styles.cointainer}>
            <Header />
            <Text> Compra de ingresso </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cointainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C2C7F1',
    }
})
