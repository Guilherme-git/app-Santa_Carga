import React, { useEffect, useState } from 'react';
import { View ,ScrollView } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (props) => {
    const navigation = useNavigation();

    return (
        <View style={{flex:1}}>
            <ScrollView>
                <View>
                    <DrawerItem
                        label="Home"
                        onPress={() => navigation.reset({
                            routes: [{ name: 'home' }]
                        })}
                    />
                    
                    <DrawerItem
                        label="Sair"
                        onPress={() =>
                        (
                            AsyncStorage.removeItem('usuario'),
                            navigation.reset({
                                routes: [{ name: 'login' }]
                            })
                        )

                        }
                    />
                </View>

            </ScrollView>

        </View>
    );
}
