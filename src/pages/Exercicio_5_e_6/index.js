import React, {useState} from 'react';
import {View, Alert, TextInput, Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Button} from 'react-native-elements';
import styles from '../../styles/estilo_padrao';
import {useNavigation} from '@react-navigation/native'

export default function Exercicio_5_e_6(){

            const navigation = useNavigation();
            const [unidadeDeMedida, setUnidadeDeMedida] = useState("Fahrenheit");
            const [valor, setValor] = useState('');
            var fahrenheit = 0;
            var celsius = 0;
            function converter(){
                if(unidadeDeMedida === "Fahrenheit"){
                    celsius = (5 * (valor-32) / 9) 
                    Alert.alert('Celsius:', celsius + "°")
                }else{
                    fahrenheit = (9 * valor + 160) / 5
                    Alert.alert('Fahrenheit:', fahrenheit + "°")
                }
            }

            return(
                <View style={styles.container}>
                    <Text style={styles.titulo}>Converter Fahrenheit e Celsius</Text>

                    <Text>Escolha a unidade de medida para ser convertida</Text>
                    <Picker
                     selectedValue={unidadeDeMedida}
                     style={styles.listas}
                     onValueChange={(itemValue) => setUnidadeDeMedida(itemValue)}>
                        <Picker.Item label={"Fahrenheit"} value="Fahrenheit"/>
                        <Picker.Item label={"Celsius"} value="Celsius"/>
                    </Picker>

                    <TextInput
                    style={styles.campo}
                    value={valor}
                    placeholder={"Temperatura"}
                    onChangeText={(valor) => setValor (valor)}
                    keyboardType="numeric"/>

                    <TouchableOpacity
                    style={styles.botao}
                    onPress={converter}>
                        <Text style={styles.texto_botao}>Converter medidas</Text>
                    </TouchableOpacity>

                    <Button buttonStyle={styles.bota_voltar} title='voltar ao início' onPress={() => navigation.goBack()}/>

                </View>
            );


}