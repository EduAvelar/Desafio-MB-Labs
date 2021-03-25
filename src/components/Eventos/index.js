/** PAGINA REFERENTE AOS EVENTOS */
import React from 'react';
import {Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';

export default function Eventos(){

    const listEvent=[
        {
            name:'Palestra',
            local:'Rua Primavera',
        },
        {
            name:'Rock in Rio',
            local: 'RIo de janeiro',
        },
        {
            name:'Simposio',
            local: 'Teatro iguatemi',
        },
    ];


    return(

        <SafeAreaView style={styles.cointainer}>
            <FlatList
            data={listEvent}
            renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
            />
        </SafeAreaView>        
    )
}

const styles = StyleSheet.create({
    cointainer:{        
        marginTop: 10,
        marginBottom: 30,
        border: 'solid',
        borderRadius: 15,
        width: 250,
        padding: 50,
    },
    item:{
        flex:1,
        marginBottom: 6,
        padding: 5

    }
})