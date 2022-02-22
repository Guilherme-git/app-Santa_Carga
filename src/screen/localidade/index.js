import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, ActivityIndicator, Platform, Alert } from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions'

export default () => {
    const navigation = useNavigation();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [carregando, setCarregando] = useState(false);
    const [atualizar, setAtualizar] = useState(0)

    useEffect(() => {
        const dados = async () => {
            setCarregando(true)
            let result = await request(
                Platform.OS === 'ios' ?
                    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                    :
                    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            )

            if (result == 'granted') {
                Geolocation.getCurrentPosition(
                    async (position) => {
                        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude}, ${position.coords.longitude}&key=AIzaSyAANriQibdTVRzVbwzrZTxUuP7aEh9kFdc`, {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(response => (
                                setCidade(response.results[0].address_components[3].long_name),
                                setEstado(response.results[0].address_components[4].long_name)
                            ))
                    },
                    (error) => Alert.alert('Error', JSON.stringify(error)),
                    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
                )
            }
            setCarregando(false)
        }

        dados();
    }, [atualizar]);

    const confirmar = async () => {
        Alert.alert('Atenção','Você confirma sua localização ?',
        [
            {
                text: "Não",
                onPress: () => {
                 setAtualizar(atualizar+1)
                },
            },

            {
                text: "Sim",
                
            }
        ]
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={style.container}>

                <Image resizeMode="stretch" style={style.logo} source={require('../../assets/logo.png')} />
                <Text style={style.title}>Confirme sua localidade</Text>

                <TouchableOpacity onPress={confirmar} style={style.btnLocalizacao}>
                    {carregando ? <ActivityIndicator color="#fff" /> :
                        <>
                            <Text style={style.btnLocalizacaoText}>
                                Cidade: {cidade}, {estado}
                            </Text>
                            <Icon style={style.icon} name="location-arrow" size={24} color="#fff" />
                        </>
                    }

                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}