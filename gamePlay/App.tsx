import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { Background} from './src/components/Background';
import { Routes  } from'./src/routes';
import { StatusBar } from 'react-native';

export default function App(){
 const[fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
    Rajdhani_500Medium
  });

  if (!fontsLoaded){
    return (<AppLoading/>)
  }
  return(
    //<fragment>, igual uma view para que se possa usar mais de um elemento no return
    <Background>
     <StatusBar
    barStyle="light-content"
    backgroundColor="transparent"
    translucent
    />
    <Routes />
     </Background>    
   
  );
}
