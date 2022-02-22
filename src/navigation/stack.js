import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Login from './../screen/login';
import Cadastro from './../screen/cadastro/index';
import Localidade from './../screen/localidade/index';
import Perfil from './../screen/perfil/index';
import EscolherCupom from './../screen/escolherCupom/index';
import Cupom from './../screen/cupom/index'
import Drawer from './drawer';

export default () => {
    return(
        <Stack.Navigator initialRouteName="drawer" screenOptions={{headerShown:false}}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="cadastro" component={Cadastro} />
            <Stack.Screen name="localidade" component={Localidade} />
            <Stack.Screen name="drawer" component={Drawer} />
            <Stack.Screen name="escolher-cupom" component={EscolherCupom} />
            <Stack.Screen name="cupom" component={Cupom} />
            <Stack.Screen name="perfil" component={Perfil} />
        </Stack.Navigator>
    );
}