import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, Alert } from 'react-native';
import style from './style';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {

    }, [])

    const verCupom = async () => {
        const usuario = JSON.parse(await AsyncStorage.getItem('usuario'))
        if (usuario) {
            navigation.navigate('escolher-cupom', {
                afiliado: route.params.id,
                foto: route.params.foto
            })
        } else {
            Alert.alert('Atenção', 
            'É necessário fazer o login para ver o cupom',
            [
                {
                    text:"Fechar"
                },
                {
                    text: "Login",
                    onPress: () => (navigation.navigate('login'))
                }
            ])
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#97F784', flex: 1 }}>
            <ScrollView>
                <View style={style.header}>

                    {/* <Image resizeMode="stretch" style={style.headerImage} source={{ uri: `http://192.168.1.105/Conte-tecnologia/santa-carga/api/public/storage/${route.params.foto}` }} /> */}
                    <Image resizeMode="stretch" style={style.headerImage} source={{ uri: `https://santacarga.contetecnologia.com.br/api/public/storage/${route.params.foto}` }} />
                </View>
                <View style={{ backgroundColor: '#fff' }}>
                    <View style={style.card}>
                        <Text style={style.cardTitle1}>{route.params.nome}</Text>
                        <Text style={style.cardTipoEntrega}>{route.params.tipo}</Text>
                    </View>

                    <View style={style.card}>
                        <Text style={style.cardTitle2}>Horario de funcionamento</Text>

                        {route.params.horario.map((horario) =>
                            <View key={horario.id} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>

                                <Text>{horario.semana}</Text>
                                <Text>{horario.horario_inicio}-{horario.horario_fim}</Text>
                            </View>
                        )}
                    </View>

                    <View style={style.card}>
                        <Text style={style.cardTitle2}>Cupom de desconto</Text>
                        {
                            /* 
                        
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text>Realize<Text style={{ color: 'green', fontWeight: 'bold' }}> login </Text>para vizualizar seu cupom</Text>
                            <Image resizeMode="center" style={style.logo} source={require('./../../assets/logo.png')} />
                        </View>
                        */
                        }

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text onPress={() => verCupom()} style={{ color: 'green', fontWeight: 'bold' }}> Ver cupom </Text>
                            <Image resizeMode="center" style={style.logo} source={require('./../../assets/logo.png')} />
                        </View>
                    </View>

                    <View style={style.card1}>
                        <Text style={style.cardTitle2}>Nossa localização</Text>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ width: '100%', height: 250, marginTop: 5 }}
                            initialRegion={{
                                latitude: Number(route.params.minhaLocalizacao.latitude),
                                longitude: Number(route.params.minhaLocalizacao.longitude),
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>

                            <Marker
                                coordinate={{
                                    latitude: Number(route.params.latitude),
                                    longitude: Number(route.params.longitude),
                                }}
                            >
                                {console.log(route.params.foto)}

                                <View style={{ alignItems: 'center' }}>
                                    {/* <Image style={style.markerImage} source={{ uri: `http://192.168.1.105/Conte-tecnologia/santa-carga/api/public/storage/${route.params.foto}`}} /> */}
                                    <Image style={style.markerImage} source={{ uri: `https://santacarga.contetecnologia.com.br/api/public/storage/${route.params.foto}` }} />
                                </View>

                                <View style={style.markerTitleCard}>
                                    <Text style={style.markerTitle}>{route.params.nome}</Text>
                                </View>

                                <View style={style.arrowBorder}></View>
                                <View style={style.arrow}></View>
                            </Marker>

                        </MapView>
                    </View>

                    <View style={style.card}>
                        <Text style={style.cardTitle2}>Sobre a empresa</Text>
                        <Text style={{ textAlign: 'justify' }}>
                            {route.params.sobre}
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}