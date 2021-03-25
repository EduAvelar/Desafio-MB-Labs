import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer} from '@react-navigation/native';

/** import das páginas */
import Home from './pages/Home';

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator>            
            <Drawer.Screen 
            name="Home" 
            component={Home}
            />
        </Drawer.Navigator>
        
    )
}

export default Routes;