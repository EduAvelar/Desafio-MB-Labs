/** PAGINA REFERENTE AOS EVENTOS */
import React from 'react';
import { Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function Eventos({ local, name, onPress }) {


    return (
        <TouchableOpacity onPress={onPress} style={styles.cointainer}>
            <Text style={styles.item}> {name} </Text>
            <Text style={styles.item}> {local} </Text>            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cointainer: {
        width: 270,
        height: 110,
        marginTop: 40,
        marginBottom: 10,
        borderRadius: 15,
        padding: 30,
        backgroundColor: '#4D76E1',
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',    
        color: '#fff',
        fontSize: 16,
        flexDirection: "row",
    }
})