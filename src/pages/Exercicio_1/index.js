import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from "@react-navigation/native"
import {Button} from 'react-native-elements';
import styles from '../../styles/estilo_padrao';



export default function Exercicio_1(){

        const navigation = useNavigation();

        //variavel em metros
        const [metros, setMetros] = useState('');

    function conversao(){ 
        
            const centimetros = parseFloat(metros*100);
            Alert.alert('Conversão',centimetros + 'cm');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Conversão de metros em centímetros</Text>
            <TextInput style={styles.campo}
                        value={metros}  
                        onChangeText={(metros) => setMetros(metros)}
                        placeholder="Digite o valor em metros..." 
                        keyboardType="numeric"
            />
            <TouchableOpacity
            style={styles.botao}
            onPress={conversao}>
                <Text style={styles.texto_botao}>Mostrar conversao</Text>
            </TouchableOpacity>

            <Button buttonStyle={styles.bota_voltar} title="Voltar ao início" onPress={() => navigation.goBack()}/>
        </View>    
    );
}