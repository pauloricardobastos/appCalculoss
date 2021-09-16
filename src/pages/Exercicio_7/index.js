import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from "@react-navigation/native"
import styles from '../../styles/estilo_padrao'

export default function Exercicio_7(){
    const navigation = useNavigation();

    //esses são os atributos que serão utilizados para o cálculo da nota
    const [notaUm, setNotaUm] = useState('');
    const [notaDois, setNotaDois] = useState('');
    const [notaTres, setNotaTres] = useState('');
    const [recuperacao, setRecuperacao] = useState('');

    //variáveis para os cálculos 
    var n1, n2, n3, r, m, me;
    n1 = Number(notaUm);
    n2 = Number(notaDois);
    n3 = Number(notaTres);
    r = Number(recuperacao);
    

    //esse atributo é para identificar a situação do aluno: "APROVADO" ou "REPROVADO"
    const [situacao, setSituacao] = useState('');

    //variavel que receberá a situação
    var s = String(situacao);

    //atributos que definirão se os componentes estarão habilitados ou não
    const [ed, setEd] = useState();
    const [ed2, setEd2] = useState(true);
    const [ed3, setEd3] = useState(true);
    const [ed4, setEd4] = useState(true);

    //função que mudara o estado dos componente
    const atualizarEstado = (qual_estado) =>{
        if(qual_estado === 1){
            setEd(!ed);
        }
        else if(qual_estado === 2){
            setEd2(!ed2);
        }else if(qual_estado === 3){
            setEd3(!ed3);
        }
        else if(qual_estado === 4){
            setEd4(!ed4);
        }
    };

   
    //função para o cálculo da média
    function media(){
        m = (n1 + n2 + n3)/3;
        me = String(m);
       if(m>=7){
           Alert.alert('Situação do Aluno:','APROVADO - MÉDIA:' + me);
           atualizarEstado(4);
       }
       else
       {
           Alert.alert('Situação do Aluno:', 'EM RECUPERAÇÃO - MÉDIA:' + me);
           atualizarEstado(1);
           atualizarEstado(2);
           
       }

   };

   // função para cálculo da média com a recuperação
   function media_recuperacao() {
      m = (n1 + n2 + n3 + r)/4;
      me = String(m);
     if(m>=5){
        Alert.alert('Situação do Aluno:','APROVADO COM RECUPERAÇÃO - MÉDIA: ' + me);
        atualizarEstado(1);
        atualizarEstado(3);
        atualizarEstado(4);
      }
     else
      {
        Alert.alert('Situação do Aluno:', 'REPROVADO ');
        atualizarEstado(1);
        atualizarEstado(3);
        atualizarEstado(4);
      }

   };

   return(
       <View style={styles.container}>

           <Text style={styles.titulo}>Recuperação</Text>

         

            <Text>{ed2? '': '1ª Nota' /*operador ternário que define o texto a ser mostrato*/ }</Text>
            
            <TextInput style={ed2?styles.campo:styles.campo_desaparecido /*operador ternário que definirá o estilo, onde este deixa visível ou não*/}
            placeholder={ed2?'1ª Nota': notaUm}
            value={notaUm}
            onChangeText={(notaUm) => setNotaUm(notaUm)}
            keyboardType="numeric"
            editable={ed2 /*atributo que deixa o componente editável ou não*/ }/>

            <Text>{ed2?'': '2ª Nota'}</Text>

            <TextInput style={ed2?styles.campo:styles.campo_desaparecido}
            placeholder={ed2?'2ª Nota': notaDois}
            value={notaDois}
            onChangeText={(notaDois) => setNotaDois(notaDois)}
            keyboardType="numeric"
            editable={ed2}/>

            <Text>{ed2?'': '3ª Nota'}</Text>

            <TextInput style={ed2?styles.campo:styles.campo_desaparecido}
            placeholder={ed2?'3ª Nota': notaTres}
            value={notaTres}
            onChangeText={(notaTres) => setNotaTres(notaTres)}
            keyboardType="numeric"
            editable={ed2}/>

            <Text>{ed3?'': 'Nota Recuperação'}</Text>

            <TextInput style={ed?styles.campo:styles.campo_desaparecido}
            placeholder={ed?'Recuperação': recuperacao}
            value={recuperacao}
            onChangeText={(recuperacao) => setRecuperacao(recuperacao)}
            editable={ed}/>

            <TouchableOpacity style={ed2?styles.botao:styles.botao_desaparecido}
            onPress={media}>
                <Text style={styles.texto_botao}>{ed2?'Calcular Média':'' }</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ed?styles.botao:styles.botao_desaparecido}
            onPress={media_recuperacao}>
                <Text style={styles.texto_botao}>{ed?'Calcular Média com a Recuperação':'' }</Text>
            </TouchableOpacity>


            <Button buttonStyle={styles.bota_voltar} title='voltar ao início' onPress={() => navigation.goBack()}/>




       </View>
   );
    

}