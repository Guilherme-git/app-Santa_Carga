import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, TextInput, Text, Image, View, TouchableOpacity, Alert } from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import api from './../../service/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dialog from 'react-native-dialog'
import DialogInput from 'react-native-dialog/lib/Input';

export default () => {
    const navigation = useNavigation();
    const [cpf, setCpf] = useState();
    const [senha, setSenha] = useState();
    const [dialog, setDialog] = useState(false);
    const [email, setEmail] = useState()

    useEffect(() => {
        const dados = async () => {
            const usuario = JSON.parse(await AsyncStorage.getItem('usuario'))
            if (usuario) {
                navigation.navigate('drawer')
            }
        }
        dados();
    }, [])

    const login = async () => {
        if (!cpf || !senha) {
            Alert.alert('Atenção', 'Informe o CPF e SENHA')
        } else {
            const response = await api.post('/login-cliente', {
                cpf: cpf,
                senha: senha
            })

            if (response.data.message == "Você não está cadastrado") {
                Alert.alert('Atenção', 'Você não está cadastrado')
            } else {
                await AsyncStorage.setItem('usuario', JSON.stringify(response.data))
                navigation.navigate('drawer')
            }

        }

        //navigation.navigate('drawer')
    }

    const esqueciSenha = async () => {
        const response = await api.post('esqueci-senha-email',{
            email: email
        })
        if(response.data.message == "Esse email não está cadastrado") {
            Alert.alert('Atenção','Esse email não está cadastrado')
        } 
        if(response.data.message == "Email enviado") {
            Alert.alert('Sucesso', `Enviamos um email para ${email}`)
            setDialog(false)
            setEmail("")
        } 
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={style.container}>

                <Image resizeMode="stretch" style={style.logo} source={require('../../assets/logo.png')} />

                <View style={style.containerInput}>
                    <Icon style={style.icon} name="user" size={20} color="#999" />
                    <TextInput keyboardType="numeric" value={cpf} onChangeText={t => setCpf(t)} style={style.input} placeholder="CPF" />
                </View>

                <View style={style.containerInput}>
                    <Icon style={style.icon} name="unlock-alt" size={20} color="#999" />
                    <TextInput secureTextEntry={true} value={senha} onChangeText={t => setSenha(t)} style={style.input} placeholder="Senha" />
                </View>

                <Text style={{ color: '#999' }} onPress={() => setDialog(true)}>Esqueceu a senha ? </Text>
                <Text onPress={() => navigation.navigate('drawer')}
                style={{ color: '#186101', marginTop:10, fontWeight:'bold' }}>Entrar sem login </Text>

                <TouchableOpacity onPress={login} style={style.btnEntrar}>
                    <Icon style={style.icon} name='share-square' size={28} color="#FFF" />
                    <Text style={style.btnEntrarText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('cadastro')} style={style.btnCadastrar}>
                    <Text style={style.btnCadastrarText}>CADASTRE-SE</Text>
                </TouchableOpacity>
            </View>

            <Dialog.Container visible={dialog}>
                    <Dialog.Title>Esqueceu a senha ?</Dialog.Title>
                    <DialogInput value={email} onChangeText={e => setEmail(e)} placeholder="Informe seu email" />
                    <Dialog.Button label="Enviar" onPress={esqueciSenha} />
                    <Dialog.Button label="Fechar" onPress={() => setDialog(false)} />
                </Dialog.Container>

        </SafeAreaView>
    );
}