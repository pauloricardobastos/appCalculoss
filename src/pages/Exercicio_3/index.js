import React, {useState} from 'react';
import  {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import styles from '../../styles/estilo_padrao';
import { useNavigation } from '@react-navigation/native';

export default function Exercicio_3(){
    const navigation = useNavigation();
    const [lado, setLado] = useState('');

    function calcularDobroArea(){
    var area = parseFloat(lado * lado)
    var dobro = area * 2
        Alert.alert('Área e seu dobro','A área do quadrado é igual: ' + area + 'cm². E o dobro é igual: ' + dobro +'cm²')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Área e seu dobro: quadrado</Text>
            <TextInput style={styles.campo}
                       value={lado}
                       placeholder="Digite o valor do lado em cm..."
                       onChangeText={(lado) =>setLado(lado)}
                       keyboardType="numeric"
            />
            <TouchableOpacity
            style={styles.botao}
            onPress={calcularDobroArea}>
                <Text style={styles.texto_botao}>Mostrar área e o dobro dela</Text>
            </TouchableOpacity>

            <Button buttonStyle={styles.bota_voltar} title="Voltar ao início" onPress={()=> navigation.goBack()}/>
        </View>
    )
}