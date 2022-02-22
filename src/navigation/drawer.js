import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerCustom from './../components/drawer';

const Drawer = createDrawerNavigator();
import Home from './../screen/home/index';

export default () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerCustom />}
            screenOptions={{
                headerShown: false
            }}>
            <Drawer.Screen name="home" component={Home} />
        </Drawer.Navigator>
    );
}