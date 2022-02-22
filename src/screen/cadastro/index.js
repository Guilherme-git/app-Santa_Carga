import React, {useState} from 'react';
import { SafeAreaView, ScrollView, TextInput, Text, Image, View, TouchableOpacity, Alert } from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import api from './../../service/axios';

export default () => {
    const navigation = useNavigation();
    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const [confirmaSenha, setConfirmaSenha] = useState();
    const [cpf, setCpf] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState()

    const cadastro = async () => {
        if (!nome || !senha || !confirmaSenha || !cpf || !telefone || !email) {
            Alert.alert('Atenção', 'Preencha todas as informações')
        } else {
            if (senha != confirmaSenha) {
                Alert.alert('Atenção','Senhas diferentes')
            } else {
                const response = await api.post('/cliente/cadastrar', {
                    nome: nome,
                    senha: senha,
                    cpf: cpf,
                    telefone: telefone,
                    email: email
                })
                if (response.data.message == "Salvo com sucesso") {
                    Alert.alert('Sucesso','Cadastrado com sucesso')
                    
                     setNome("")
                     setSenha("")
                     setConfirmaSenha("")
                     setCpf("")
                     setTelefone("")
                     setEmail("")
                }
            }
        }

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={style.container}>

                <Image resizeMode="stretch" style={style.logo} source={require('../../assets/logo.png')} />

                <View style={style.containerInput}>
                    <Icon style={style.icon} name="user" size={20} color="#999" />
                    <TextInput value={nome} onChangeText={t => setNome(t)} style={style.input} placeholder="Nome" />
                </View>

                <View style={style.containerInput}>
                    <Icon style={style.icon} name="unlock-alt" size={20} color="#999" />
                    <TextInput value={senha} onChangeText={t => setSenha(t)} style={style.input} placeholder="Senha" />
                </View>

                <View style={style.containerInput}>
                    <Icon style={style.icon} name="unlock-alt" size={20} color="#999" />
                    <TextInput value={confirmaSenha} onChangeText={t => setConfirmaSenha(t)} style={style.input} placeholder="Confirme sua senha" />
                </View>

                <View style={style.containerInput}>
                    <Icon style={style.icon} name="address-card" size={20} color="#999" />
                    <TextInput keyboardType="numeric" value={cpf} onChangeText={t => setCpf(t)} style={style.input} placeholder="CPF" />
                </View>

                <View style={style.containerInput}>
                    <Icon style={style.icon} name="phone" size={20} color="#999" />
                    <TextInput keyboardType="numeric" value={telefone} onChangeText={t => setTelefone(t)} style={style.input} placeholder="Telefone" />
                </View>

                <View style={style.containerInput}>
                    <Icon style={style.icon} name="envelope" size={20} color="#999" />
                    <TextInput keyboardType="email-address" value={email} onChangeText={t => setEmail(t)} style={style.input} placeholder="Seu email" />
                </View>

                <TouchableOpacity style={style.btnEntrar} onPress={cadastro}>
                    <Icon style={style.icon} name='share-square' size={28} color="#FFF" />
                    <Text style={style.btnEntrarText}>CADASTRAR</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ color: '#999' }}>Já possui uma conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={{ color: 'green', fontWeight: 'bold' }}>Fazer login</Text>
                    </TouchableOpacity>

                </View>


            </View>

        </SafeAreaView>
    );
}
