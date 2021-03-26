import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.cointainer} onPress={() => navigation.openDrawer()}>
            <Feather
                name="menu"
                size={40}
                color='#fff'
            ></Feather>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cointainer: {
        position: 'absolute',
        zIndex: 9,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        left: 8,
        top: 20,
    }
})