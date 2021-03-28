import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

/** import das páginas */
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Ingresso from './pages/Ingresso';


const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
            />
            <Drawer.Screen
                name="Cadastro"
                component={Cadastro}
            />
            <Drawer.Screen
                name="Comprar Ingresso"
                component={Ingresso}
            />
        </Drawer.Navigator>
    )
}

export default Routes;