import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Alert } from 'react-native';
import Menu from '../../components/Menu';
import Eventos from '../../components/Eventos';
import Header from '../../components/Header';

export default function Home({ navigation }) {

    const listEvent = [
        {
            id: 1,
            name: 'Palestra',
            local: 'Rua Primavera',
        },
        {
            id: 2,
            name: 'Rock in Rio',
            local: 'Rio de janeiro',
        },
        {
            id: 3,
            name: 'Palestra',
            local: 'São Paulo'
        },
        {
            id: 4,
            name: 'Lolapalluza',
            local: 'São Paulo'
        }
    ];

    return (

        <SafeAreaView style={styles.cointainer}>

            <Header />
            <View style={{position:'relative'}}>
                <FlatList
                    data={listEvent}
                    renderItem={({
                        item
                    }) => <Eventos name={item.name} local={item.local} onPress={() => navigation.navigate('Comprar Ingresso')} />}
                />
            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cointainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        backgroundColor: '#C2C7F1',
    }
})