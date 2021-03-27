import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

import Header from '../../components/Header';

export default function Cadastro() {




    return (
        <SafeAreaView style={styles.cointainer}>
            <Header />
            <View style={styles.cadastro}>
                <Text style={styles.title}> Cadastro </Text>

                <Text style={styles.label} >Nome: </Text>
                <TextInput
                    style={styles.input}
                />

                <Text style={styles.label}>CPF: </Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={11}
                />

                <Text style={styles.label}>Telefone: </Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={11}
                />

                <Text style={styles.label}>Data de Nascimento: </Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                />

                <Text style={styles.label}>E-mail: </Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Senha: </Text>
                <TextInput
                    style={[styles.input, styles.mb20]}
                />

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Cadastro realizado com sucesso!!')}>
                    <Text style={styles.buttonText}> Cadastrar </Text>
                </TouchableOpacity>




            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    cointainer: {
        flex: 1,
        backgroundColor: '#C2C7F1',
    },
    cadastro: {
        width: 350,
        flex: 1,
        marginTop: -10,

        marginLeft: 15,
        fontSize: 22,
        padding: 15,
    },
    title: {
        color: '#4D76E1',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30,
        fontSize: 30,
    },
    label: {
        color: '#4D76E1',
        fontSize: 22,
        marginTop: 10,
    },
    input: {
        color: '#4D76E1',
        backgroundColor: '#fff',
        fontSize: 22,
    },
    mb20: {
        marginBottom: 40,
    },
    button: {
        backgroundColor: "#4D76E1",
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff'
    }
})
