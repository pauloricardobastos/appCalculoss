import React, {useState} from 'react';
import {Text, TextInput, View, Alert, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import styles from '../../styles/estilo_padrao'
import {useNavigation} from '@react-navigation/native'


export default function Exercicio_8(){
    const navigation = useNavigation();
    const [pontuacao, setPontuacao] = useState('');

    function verificar_pontuacao(){
        var p = Number(pontuacao)
        if(p<0 | p>100){
            Alert.alert('PONTUAÇÃO INVÁLIDA', 'Por favor, digite uma pontuação válida...');
        }
        else{
            if(p<=30){
                Alert.alert('REGULAR', 'Pode melhorar...');
            }
            else if(p>=31 & p<=60){
                Alert.alert('BOM', 'Aceitável.');
            }
            else if(p>=61 & p<=90){
                Alert.alert('MUITO BOM', 'Quase perfeito...');
            }
            else{
                Alert.alert('ÓTIMO', 'Impecável! Parabéns!');
            }
        }
    }

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Classificação</Text>

            <TextInput
            style={styles.campo}
            value={pontuacao}
            onChangeText={(pontuacao) => setPontuacao(pontuacao)}
            placeholder={'Digite sua Pontuação'}
            keyboardType={'numeric'}/>

            <TouchableOpacity
            style={styles.botao}
            onPress={verificar_pontuacao}>
                <Text style={styles.texto_botao}>Verificar Desempenho</Text>
            </TouchableOpacity>

            <Button 
            buttonStyle={styles.bota_voltar}
            title={'Voltar ao início'}
            onPress={() => navigation.goBack()}></Button>
        </View>
    );
}