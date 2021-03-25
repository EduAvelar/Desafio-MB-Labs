import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default function Header(){
    return(
        <View style={styles.cointainer}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cointainer:{
        flex:1,
        position: 'absolute',
        marginTop: -730,
        width: 430,
        height: 100,
        backgroundColor:'#4D76E1',        
    },
})