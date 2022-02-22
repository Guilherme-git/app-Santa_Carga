import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default () =>{
    const navigation = useNavigation();
    
    return(
        <Icon onPress={() => navigation.openDrawer()}
         name="list" color="#000" size={24} />
    );
}
