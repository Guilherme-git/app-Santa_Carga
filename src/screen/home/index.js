import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, Image, TextInput, FlatList, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import style from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import AbrirDrawer from '../../components/abrirDrawer';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './../../service/axios';

export default () => {
    const navigation = useNavigation();
    const [localizacao, setLocalizacao] = useState({});
    const [carregando, setCarregando] = useState(false);

    const [filtroMapa, setFiltroMapa] = useState(false)
    const [filtroProximo, setFiltroProximo] = useState(false)

    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();

    const [afiliados, setAfiliados] = useState([]);
    const [afiliadosProximos, setAfiliadosProximos] = useState([]);

    const [horas, setHoras] = useState()

    useEffect(() => {
        const dados = async () => {
            var h = new Date().getHours()
            var m = new Date().getMinutes()
            setHoras(h + ":" + m)


            Geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocalizacao({ latitude: latitude, longitude: longitude })

                    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDNiyPhDV0i9gLQhZ_TrgftRTqwfEb9vHg`, {
                        method: 'GET'
                    })
                        .then(response => response.json())
                        .then(response => (
                            setCidade(response.results[0].address_components[3].long_name),
                            setEstado(response.results[0].address_components[4].long_name)
                        ))
                    setFiltroMapa(true)
                    setCarregando(true)
                },
                error => Alert.alert('Ops...', 'Houve um erro ao tentar pegar sua Localização.'),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );

            const response = await api.get('/admin/afiliado/listar');
            setAfiliados(response.data)
        }

        dados();
    }, []);

    const filtrarMapa = () => {
        setFiltroMapa(true)
        setFiltroProximo(false)
    }

    const filtrarProximo = async () => {
        const response = await api.get(`/admin/afiliado/listar-proximos?cidade=${cidade}`)
        setAfiliadosProximos(response.data)
        setFiltroProximo(true)
        setFiltroMapa(false)
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={style.header}>
                <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                    <AbrirDrawer />
                    <Image resizeMode="stretch" style={style.logo} source={require('./../../assets/logo.png')} />
                    <View></View>
                </View>

                {/* <TextInput style={style.pesquisar} placeholder="Digite o endereço..." /> */}

                {carregando &&
                    <>
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 10 }}>
                            <Text style={{ fontSize: 18 }}>{cidade}, </Text>
                            <Text style={{ fontSize: 18, marginRight: 5 }}>{estado}</Text>
                            <Icon name="location-arrow" color="#ccc" size={18} style={{ alignSelf: 'center' }} />
                        </View>


                        <View style={style.containerFiltro}>
                            {filtroMapa ? <Text onPress={() => filtrarMapa()} style={style.containerFiltroMapaAtivo}>MAPA</Text>
                                :
                                <Text onPress={() => filtrarMapa()} style={style.containerFiltroMapaDesativo}>MAPA</Text>}

                            {filtroProximo ? <Text onPress={() => filtrarProximo()} style={style.containerFiltroProximoAtivo}>PRÓXIMOS A MIM</Text>
                                :
                                <Text onPress={() => filtrarProximo()} style={style.containerFiltroProximoDesativo}>PRÓXIMOS A MIM</Text>}
                        </View>
                    </>
                }
            </View>

            {carregando ?
                <>
                    {filtroMapa &&
                        <>
                            {localizacao.latitude && localizacao.longitude &&
                                <MapView
                                    provider={PROVIDER_GOOGLE}
                                    style={{ width: '100%', height: '100%' }}
                                    initialRegion={{
                                        latitude: localizacao.latitude,
                                        longitude: localizacao.longitude,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}>

                                    {afiliados.map((afiliado) =>
                                        <Marker
                                            key={afiliado.id}
                                            coordinate={{
                                                latitude: Number(afiliado.latitude),
                                                longitude: Number(afiliado.longitude)
                                            }}
                                            onPress={() => navigation.navigate('perfil', {
                                                id: afiliado.id,
                                                nome: afiliado.nome,
                                                email: afiliado.email,
                                                endereco: afiliado.endereco,
                                                contato: afiliado.endereco,
                                                latitude: afiliado.latitude,
                                                longitude: afiliado.longitude,
                                                tipo: afiliado.tipo,
                                                foto: afiliado.foto,
                                                sobre: afiliado.sobre,
                                                categoria: afiliado.categoria,
                                                horario: afiliado.horario,
                                                minhaLocalizacao: localizacao
                                            })}
                                        >
                                            <View style={{ alignItems: 'center' }}>
                                                {/* <Image style={style.markerImage} source={{ uri: `http://192.168.1.105/Conte-tecnologia/santa-carga/api/public/storage/${afiliado.foto}` }} /> */}
                                                <Image style={style.markerImage} source={{ uri: `https://santacarga.contetecnologia.com.br/api/public/storage/${afiliado.foto}` }} />
                                            </View>

                                            <View style={style.markerTitleCard}>
                                                <Text style={style.markerTitle}>{afiliado.nome}</Text>
                                            </View>

                                            <View style={style.arrowBorder}></View>
                                            <View style={style.arrow}></View>
                                        </Marker>
                                    )}

                                </MapView>
                            }
                        </>
                    }

                    {filtroProximo &&
                        <>
                            <ScrollView nestedScrollEnabled={true} scrollEnabled={true}>
                                <FlatList
                                    nestedScrollEnabled={true}
                                    scrollEnabled={true}
                                    data={afiliadosProximos}
                                    renderItem={({ item, index }) =>
                                        <View style={style.cardList}>
                                            {item.foto ?
                                                <>
                                                    {/* <Image resizeMode="stretch" style={style.cardListImage} source={{ uri: `http://192.168.1.105/Conte-tecnologia/santa-carga/api/public/storage/${item.foto}` }} /> */}
                                                    <Image resizeMode="stretch" style={style.cardListImage} source={{ uri: `https://santacarga.contetecnologia.com.br/api/public/storage/${item.foto}` }} />
                                                </>
                                                :
                                                <>
                                                    <Image resizeMode="stretch" style={style.cardListImage} source={require('./../../assets/logo.png')} />
                                                </>
                                            }
                                            <Text style={style.cardListTitle} onPress={() => navigation.navigate('perfil', {
                                                id: item.id,
                                                nome: item.nome,
                                                email: item.email,
                                                endereco: item.endereco,
                                                contato: item.endereco,
                                                latitude: item.latitude,
                                                longitude: item.longitude,
                                                tipo: item.tipo,
                                                foto: item.foto,
                                                sobre: item.sobre,
                                                categoria: item.categoria,
                                                horario: item.horario,
                                                minhaLocalizacao: localizacao
                                            })}>{item.nome}</Text>

                                            <Text style={style.cardListTipoEntrega}>{item.tipo}</Text>

                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text></Text>
                                                <View style={style.cardListDetalhes}>
                                                    {/* <Text style={style.cardListDetalhesAberto}>Aberto agora</Text> */}
                                                    <Text style={style.cardListDetalhesText}>{item.cidade}</Text>
                                                    {/* <Text style={style.cardListDetalhesText}>12 KM</Text> */}
                                                </View>
                                            </View>
                                        </View>
                                    }
                                />
                            </ScrollView>
                        </>
                    }
                </>
                :
                <ActivityIndicator color="#186101" />
            }
        </SafeAreaView >

    )
}