import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import style from './style';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [cupom, setCupom] = useState(true);

    useEffect(() => {

    }, [])

    const verCupom = async () => {

    }

    return (
        <SafeAreaView style={{ backgroundColor: '#97F784', flex: 1 }}>
            <ScrollView>
                <View style={style.header}></View>

                <View style={style.containerCupom}>
                    <Text style={style.containerCupomTitle}>Tire o print screen da tela e mostre no estabelecimento</Text>

                    <Text style={style.containerCupomDescricao}>CUPOM: {route.params.nome}</Text>
                    <Text style={style.containerCupomDescricao1}>{route.params.desconto}% DE DESCONTO</Text>

                    {/* <Image resizeMode="center" style={style.logoPerfil} source={{ uri: `http://192.168.1.105/Conte-tecnologia/santa-carga/api/public/storage/${route.params.foto}` }} /> */}
                    <Image resizeMode="center" style={style.logoPerfil} source={{ uri: `https://santacarga.contetecnologia.com.br/api/public/storage/${route.params.foto}` }} />

                    <Image resizeMode="center" style={style.logoPerfil} source={require('./../../assets/logo-branco.png')} />

                </View>


            </ScrollView>
        </SafeAreaView>
    );
}