import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './estilo';
import {Button} from 'react-native-elements';

export default function Home(){
    const navigation = useNavigation();

    function irExercicio_1() {
        navigation.navigate('Exercicio_1');
    }
    function irExercicio_2() {
        navigation.navigate('Exercicio_2');
    }
    function irExercicio_3() {
        navigation.navigate('Exercicio_3');
    }
    function irExercicio_4() {
        navigation.navigate('Exercicio_4');
    }
    function irExercicio_5_e_6() {
        navigation.navigate('Exercicio_5_e_6');
    }
    function irExercicio_7() {
        navigation.navigate('Exercicio_7');
    }
    function irExercicio_8() {
        navigation.navigate('Exercicio_8');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Qual cálculo precisa?</Text>
            <Button buttonStyle={styles.botao} title="Conversão de metros em centímetros" onPress={irExercicio_1}/>
            <Button buttonStyle={styles.botao} title="Área de circunferência" onPress={irExercicio_2}/>
            <Button buttonStyle={styles.botao} title="Área e seu dobro: quadrado" onPress={irExercicio_3}/>
            <Button buttonStyle={styles.botao} title="Salário por hora" onPress={irExercicio_4}/>
            <Button buttonStyle={styles.botao} title="Converter Fahrenheit e Celsius" onPress={irExercicio_5_e_6}/>
            <Button buttonStyle={styles.botao} title="Recuperação" onPress={irExercicio_7}/>
            <Button buttonStyle={styles.botao} title="Classificação" onPress={irExercicio_8}/>
        </View>    
    );
}