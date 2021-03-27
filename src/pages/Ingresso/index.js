import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import Header from '../../components/Header';

export default function Ingresso() {
    return (
        <View style={styles.cointainer}>
            <Header />
            <Image
                source={require('../../../assets/music-notes.png')}
                style={styles.image}
            />
            <Text style={styles.titleImage}> Rock in Rio </Text>

            <View >
                <Text style={styles.title}>Descrição</Text>
                <Text style={styles.description}>
                    It is a long established fact that a reader will be
                    distracted by the readable content
                    of a page when looking at its layout.
                </Text>
            </View>
            <Button
                title="Comprar Ingresso"
                color="#4D76E1"
                onPress={() => Alert.alert('Compra realizada com sucesso!!')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    cointainer: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: '#C2C7F1',
    },
    image: {
        marginTop: 20,
        marginBottom: 12,
        marginLeft: 5,
        width: 120,
        height: 120,
        borderWidth: 5,
    },
    titleImage: {
        color: '#4D76E1',
        marginTop: 15,
        marginBottom: 30,
        fontSize: 22,

    },
    title: {
        color: '#4D76E1',
        fontSize: 22,
        marginTop: 90,
        marginBottom: 0,
        marginRight: 15,
        marginLeft: 12,
    },
    description: {
        color: '#4D76E1',
        fontSize: 22,
        marginRight: 12,
        marginLeft: 12,
        marginBottom: 65,
    },

})
