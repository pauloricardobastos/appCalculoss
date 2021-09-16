import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Exercicio_1 from './src/pages/Exercicio_1';
import Exercicio_2 from './src/pages/Exercicio_2';
import Exercicio_3 from './src/pages/Exercicio_3';
import Exercicio_4 from './src/pages/Exercicio_4';
import Exercicio_5_e_6 from './src/pages/Exercicio_5_e_6';
import Exercicio_7 from './src/pages/Exercicio_7';
import Exercicio_8 from './src/pages/Exercicio_8';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Exercicio_1" component={Exercicio_1}/>
        <Stack.Screen name="Exercicio_2" component={Exercicio_2}/>
        <Stack.Screen name="Exercicio_3" component={Exercicio_3}/>
        <Stack.Screen name="Exercicio_4" component={Exercicio_4}/>
        <Stack.Screen name="Exercicio_5_e_6" component={Exercicio_5_e_6}/>
        <Stack.Screen name="Exercicio_7" component={Exercicio_7}/>
        <Stack.Screen name="Exercicio_8" component={Exercicio_8}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

