import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        marginTop: 10,
        flex: 1,
    },
    logo: {
        width: 200,
        height: 80,
        marginBottom: 20,
        alignSelf: 'center'
    },
    pesquisar: {
        backgroundColor: '#ccc',
        width: 200,
        height: 40,
        alignSelf: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    containerFiltro: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 0.5,
        borderColor: '#ccc',
        marginBottom: 5,
        marginTop: 5,
        paddingBottom: 10,
    },
    containerFiltroMapaAtivo: {
        color: 'green',
        fontWeight: 'bold',
        flex: 1
    },
    containerFiltroMapaDesativo: {
        color: '#666',
        flex: 1,
    },
    containerFiltroProximoAtivo: {
        color: 'green',
        fontWeight: 'bold',
        flex: 1
    },
    containerFiltroProximoDesativo: {
        color: '#666',
        flex: 1,
        orderBottomWidth: 1,
        borderBottomColor: 'green',
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
        backgroundColor: '#20772E',
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
        paddingLeft: 5,
        paddingRight: 5
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
    cardList: {
        borderRadius: 20,
        height: 150,
        marginRight:10,
        marginLeft:10,
        marginBottom:10,
        backgroundColor:'#186101'
    },
    cardListImage: {
        position: 'absolute',
        flex: 1,
        height: '100%',
        width: '100%',
        borderRadius:10
    },
    cardListSemImage: {
        flex: 1,
        height: 200,
        width: '100%',
        backgroundColor:'black'
    },
    cardListTitle: {
        color: '#fff',
        fontWeight: 'bold',
        margin: 20,
        fontSize: 20,
    },
    cardListTitle1: {
        color: '#186101',
        fontWeight: 'bold',
        margin: 20,
        fontSize: 20
    },
    cardListTipoEntrega: {
        backgroundColor: 'green',
        color: '#fff',
        width: 120,
        padding: 5,
        borderRadius: 5,
        marginLeft: 20,
        marginTop: -15,
        textAlign:'center',
    },
    cardListDetalhes: {
        marginRight:10,
        marginTop:10
    },
    cardListDetalhesAberto: {
        fontWeight:'bold',
        color:'#186101'
    },
    cardListDetalhesFechado: {
        fontWeight:'bold',
        color:'#A70101'
    },
    cardListDetalhesText: {
        fontWeight:'bold',
        color:'#fff',
        backgroundColor:'#20772E',
        padding:5,
        borderRadius:10
    },
});

export default Style;