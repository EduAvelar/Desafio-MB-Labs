import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';




import Header from '../../components/Header';

export default function Cadastro() {
    return (
        <View style={styles.cointainer}>
            <Header />
            <View style={styles.cadastro}>
                <Text style={styles.title}> Cadastro </Text>

                <Text style={styles.label} >Nome: </Text>
                <TextInput style={styles.input} />

                <Text style={styles.label}>CPF: </Text>
                <TextInput style={styles.input} />

                <Text style={styles.label}>Telefone: </Text>
                <TextInput style={styles.input} />

                <Text style={styles.label}>Data de Nascimento: </Text>
                <TextInput style={styles.input} />

                <Text style={styles.label}>E-mail: </Text>
                <TextInput style={styles.input} />

                <Text style={styles.label}>Senha: </Text>
                <TextInput style={styles.input} />

                <Button
                    title="Cadastar"
                    color='#4D76E1'
                    style={{ marginTop: 20, fontSize: 22 }}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cointainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C2C7F1',
    },
    cadastro: {
        width: 350,
        height: 450,
        marginTop: -45,
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
        border: 'solid',
        backgroundColor: '#fff',
        fontSize: 22,

    },
    button: {
        marginTop: 60,
        fontSize: 22,
        flex: 1,

    }
})
