import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    header: {
        height: 200
    },
    headerImage: {
        height: 200,
    },
    card: {
        borderWidth: 0.5,
        borderColor: '#666',
        margin: 10,
        borderRadius: 5,
        padding: 10,
    },
    card1: {
        borderWidth: 0.5,
        borderColor: '#666',
        margin: 10,
        borderRadius: 5,
        padding: 10,
        height:300
    },
    cardTipoEntrega: {
        backgroundColor: 'green',
        color: '#fff',
        width: 80,
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
        textAlign:'center'
    },
    cardTitle1: {
        color: '#666',
        fontWeight: 'bold',
        fontSize: 18
    },
    cardTitle2: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18
    },
    logo: {
        height: 80,
        width: 80,
        marginTop: -30
    },
    marker: {
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 200,
    },
    markerTitleCard: {
        width: 150,
        backgroundColor: '#DCA900',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    markerTitle: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingLeft:5,
        paddingRight:5
    },
    markerImage: {
        width: 50,
        height: 50,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#20772E',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5
    },
    containerCupom:{
        marginTop: -100,
        flex:1,
        backgroundColor:'#0C3F03',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        borderWidth:0,
        marginBottom:10
    },
    containerCupomTitle: {
        fontSize:24,
        fontWeight:'bold',
        color:'#ccc',
        marginTop:50,
        margin:20
    },
    containerCupomDescricao: {
        fontSize:24,
        fontWeight:'bold',
        color:'#ccc',
        margin:20
    },
    containerCupomDescricao1: {
        fontSize:24,
        fontWeight:'bold',
        color:'#ccc',
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
        marginTop:-10
    },
    logoPerfil: {
        height: 115,
        width: 115,
        alignSelf:'center',
        borderRadius:50
    },
})

export default style;