import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    logo: {
        width: 200,
        height: 80,
        marginBottom:20
    },
    container: {
        flex:1,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
    },
    containerInput: {
        flexDirection:'row',
        borderBottomColor:'#999',
        borderBottomWidth:1,
        width: 250
    },
    icon: {
        alignSelf:'center'
    },
    input: {
        width: 250,
        color:'#000'
    },
    btnEntrar: {
        marginTop:10,
        backgroundColor:'#FBC02E',
        flexDirection:'row',
        borderRadius:10,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        width: 200,
    },
    btnEntrarText: {
        color:'#fff',
        fontSize: 18,
        fontWeight:'bold',
        marginLeft:10
    },
    btnCadastrar: {
        marginTop: 60,
        backgroundColor:'#227C1D',
        borderRadius:10,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        width: 200,
    },
    btnCadastrarText: {
        color:'#fff',
        fontSize: 18,
        fontWeight:'bold',
        marginLeft:10
    }

});

export default style;