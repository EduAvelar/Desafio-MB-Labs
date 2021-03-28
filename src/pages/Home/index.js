import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Eventos from '../../components/Eventos';
import Header from '../../components/Header';


export default function Home({ navigation }) {

    const listEvent = [
        {
            name: 'Palestra',
            local: 'Teatro Iguatemi',
        },
        {
            name: 'Simpósio',
            local: 'USP',
        },
        {
            name: 'Palestra',
            local: 'Unicamp'
        },
        {
            name: 'Feira de Produtos',
            local: 'Expo São Paulo'
        },
        {
            name: 'Palestras',
            local: 'Centro de Exposições'
        },
    ];

    return (

        <SafeAreaView style={styles.cointainer}>
            <Header />
            <View style={{ position: 'relative', flex: 1 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={listEvent}
                    renderItem={({
                        item
                    }) => <Eventos name={item.name} local={item.local} onPress={
                        () => navigation.navigate('Comprar Ingresso'
                        )} />}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cointainer: {
        flex: 1,
        alignItems: 'center',
        fontSize: 20,
        backgroundColor: '#C2C7F1',
    }
})