import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <View style={styles.cointainer}>
      <Text>
        Esse texto esta no arquivo app
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cointainer:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
})