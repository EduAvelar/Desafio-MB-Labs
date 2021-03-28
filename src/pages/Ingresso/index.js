import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Header from '../../components/Header';

export default function Ingresso() {
    return (
        <View style={styles.cointainer}>
            <Header />

            <View style={styles.cointainerImage}>
                <Image
                    source={require('../../../assets/conference.png')}

                    style={styles.image}
                />
                <Text style={styles.titleImage}> Palestra </Text>
            </View>

            <View >
                <Text style={styles.titleDescription}>Descrição</Text>
                <Text style={styles.description}>
                    It is a long established fact that a reader will be
                    distracted by the readable content
                    of a page when looking at its layout.
                </Text>

                <Text style={styles.price}>R$ 100,00</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert('Compra realizada com sucesso!!')}
            >
                <Text style={styles.buttonText}> Comprar Ingresso </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    cointainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#C2C7F1',
    },
    cointainerImage: {
        flexDirection: 'row',
        marginTop: 10,
    },
    image: {
        marginTop: 40,
        marginBottom: 12,
        marginRight: 50,
        width: 120,
        height: 120,
    },
    titleImage: {
        color: '#4D76E1',
        marginTop: 50,
        marginRight: 90,
        marginBottom: 70,
        fontSize: 22,
    },
    titleDescription: {
        color: '#4D76E1',
        fontSize: 22,
        marginTop: 50,
        marginBottom: 10,
        marginRight: 15,
        marginLeft: 30,
    },
    description: {
        color: '#4D76E1',
        fontSize: 22,
        marginRight: 12,
        marginLeft: 30,
        marginBottom: 60,
    },
    price: {
        color: '#4D76E1',
        fontSize: 22,
        marginRight: 12,
        marginLeft: 30,
        marginBottom: 60,
    },
    button: {
        backgroundColor: "#4D76E1",
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        marginRight: 160,
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
    }
})
