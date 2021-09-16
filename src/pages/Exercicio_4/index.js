import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {Button} from 'react-native-elements';
import {Picker} from '@react-native-community/picker';
import styles from '../../styles/estilo_padrao';

export default function Exercicio_4(){
    const [mesSelecionado, setMes] = useState();
    const [hora, setHora] = useState('');
    const [horas, setHoras] = useState('');

    const navigation = useNavigation();

    function descobrir_salario(){
       var salario = hora*horas
        Alert.alert('Seu salário:','Mês de '+ mesSelecionado + ' - R$' + salario + ',00')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Salário por hora</Text>
            <TextInput 
            style={styles.campo}
            value={hora}
            placeholder="Salário por hora em R$"
            onChangeText={(hora) => setHora (hora)}
            keyboardType="numeric"/> 

            <TextInput 
            style={styles.campo} 
            value={horas}
            placeholder="Horas Trabalhadas no Mês"
            onChangeText={(horas) => setHoras (horas)}
            keyboardTyoe="numeric"/> 
            <Text>Mês indicado</Text>

            <Picker
            selectedValue={mesSelecionado}
            style={styles.listas}
            onValueChange={(itemValue) => setMes(itemValue)}>
                <Picker.Item label={"Janeiro"} value='Janeiro'/>
                <Picker.Item label={"Fevereiro"} value='Fevereiro'/>
                <Picker.Item label={"Março"} value='Março'/>
                <Picker.Item label={"Abril"} value='Abril'/>
                <Picker.Item label={"Maio"} value='Maio'/>
                <Picker.Item label={"Junho"} value='Junho'/>
                <Picker.Item label={"Julho"} value='Julho'/>
                <Picker.Item label={"Agosto"} value='Agosto'/>
                <Picker.Item label={"Setembro"} value='Setembro'/>
                <Picker.Item label={"Outubro"} value='Outubro'/>
                <Picker.Item label={"Novembro"} value='Novembro'/>
                <Picker.Item label={"Dezembro"} value='Dezembro'/>
            </Picker>

            <TouchableOpacity
            style={styles.botao}
            onPress={descobrir_salario}>
                <Text style={styles.texto_botao}>Mostrar ganho mensal atual</Text>
            </TouchableOpacity>

            <Button buttonStyle={styles.bota_voltar} title='voltar ao início' onPress={() => navigation.goBack()}/>



        </View>
    )

}