import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, Image, TextInput, FlatList, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import style from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import AbrirDrawer from '../../components/abrirDrawer';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './../../service/axios';
import moment from 'moment';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [cupons, setCupons] = useState([])

    const [horas, setHoras] = useState()

    useEffect(() => {
        const dados = async () => {
            const response = await api.get(`/afiliado/cupom/meus-cupons?afiliado=${route.params.afiliado}`)
            setCupons(response.data)
        }
        dados();
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={style.header}>
                <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                    <View></View>
                    <Image resizeMode="stretch" style={style.logo} source={require('./../../assets/logo.png')} />
                    <View></View>
                </View>

                {/* <TextInput style={style.pesquisar} placeholder="Digite o endereço..." /> */}
            </View>

            <FlatList
                nestedScrollEnabled={true}
                scrollEnabled={true}
                data={cupons}
                renderItem={({ item, index }) =>
                    <View style={style.cardList}>
                        <Text style={style.cardListTitle} onPress={() => navigation.navigate('cupom', {
                            foto: route.params.foto,
                            nome: item.nome,
                            desconto: item.desconto
                        })}>Cupom: {item.nome}</Text>

                        <Text style={style.cardListTipoEntrega}>Desconto: {item.desconto}%</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text></Text>
                            <View style={style.cardListDetalhes}>
                                <Text style={style.cardListDetalhesText}>Validade: {moment(item.data_criacao).format('DD/MM/YYYY')} - {moment(item.data_encerrar).format('DD/MM/YYYY')}</Text>
                            </View>
                        </View>
                    </View>
                }
            />
        </SafeAreaView >

    )
}