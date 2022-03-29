import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium} from '@expo-google-fonts/rajdhani';


import { SignIn  } from'./src/screens/SignIn';

export default function App(){
  return(
    <SignIn />
  );
}
