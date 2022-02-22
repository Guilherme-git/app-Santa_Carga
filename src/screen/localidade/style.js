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
        alignItems:'center'
    },
   title: {
       fontSize: 28
   },
   btnLocalizacao: {
    flexDirection:'row',
       backgroundColor:'green',
       width: 280,
       marginTop:10,
       justifyContent:'center',
       alignItems:'center',
       height:40,
   },
   btnLocalizacaoText: {
       color:'#fff',
       fontWeight:'bold',
       marginRight: 10
   }

});

export default style;