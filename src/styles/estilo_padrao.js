import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#708090',
    },
    titulo:{
        color:'#111111',
        fontSize: 30,
    },
    campo: {
        backgroundColor:'#dcdcdc',
        borderRadius:10,
        margin: 15,
        padding: 10,
        color: '#9932cc',
        fontSize: 23,
       },

    campo_desaparecido:{
        backgroundColor:'transparent',
        color: '#000000',
        fontSize: 40,
    },

    botao:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#111111',
        marginTop: 20,
        marginBottom: 20,   
        borderRadius:30,
        height:60,
        width:250,
    },
    texto_botao:{
        color:'#708090',
    },

    botao_desaparecido:{
        backgroundColor:'transparent',
        color: 'transparent'
    },

    bota_voltar:{
        backgroundColor:'#111111',
    },

    listas:{
        marginTop: 15,
        fontSize:25,
        textAlign:'center',
        height:50, 
        width:150
    }
});

export default styles;