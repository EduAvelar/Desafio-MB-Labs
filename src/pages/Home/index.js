import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Menu from '../../components/Menu';
import Eventos from '../../components/Eventos';
import Header from '../../components/Header';

export default function Home(){
    return(
        <View style={styles.cointainer}>

            <Menu/>
            <Header/>
            <Eventos/>
            <Eventos/>
            <Eventos/>
            <Eventos/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cointainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        fontSize: 20,
        backgroundColor: '#C2C7F1',
    }
})