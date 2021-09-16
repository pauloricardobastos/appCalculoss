import React, {useState} from  'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from '../../styles/estilo_padrao';
import {Button} from 'react-native-elements';
import {useNavigation} from "@react-navigation/native"


export default function Exercicio_2(){
    const navigation = useNavigation();
    const [raio, setRaio] = useState('');

    function areaCirculo(){            
        var area = parseFloat(raio * raio * 3.14);
        Alert.alert('Circunferência','A área da circunferência é: ' + area +'cm²');
    }
    return(
        <View style={styles.container}>

           <Text style={styles.titulo}>Área de circunferência</Text>

           <TextInput style={styles.campo}
                      value={raio}
                      onChangeText={(raio) => setRaio(raio)}
                      placeholder="Digite o valor do raio em cm..."
                      keyboardType="numeric"
            />

            <TouchableOpacity
            style={styles.botao}
            onPress={areaCirculo}>
                <Text style={styles.texto_botao}>Mostrar área</Text>
            </TouchableOpacity>
            
            <Button buttonStyle={styles.bota_voltar} title="Voltar ao início" onPress={() => navigation.goBack()}/>
        </View>   
    )


}