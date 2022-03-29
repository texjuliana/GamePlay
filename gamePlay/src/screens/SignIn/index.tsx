import React from "react";
import {View, Text, Image} from "react-native";
import {styles} from './styles';
import IllustrationImg from "../../assets/illustration.png"
import { ButtomIcon } from "../../components/buttonIcon";

export  function SignIn(){

    return(
      <View style={styles.container}>
        
         <Image 
         source={IllustrationImg}
         style={styles.image}
         resizeMode="stretch"
         />
         <View style={styles.content}>
             <Text style={styles.title}> 
                 Conecte-se {'\n'} 
                   e organize seus  {'\n'}
                 games
             </Text>
             <Text style={styles.subtitle}>
                 Crie grupos para jogar seus games {'\n'}
                  favoritos com seus amigos
             </Text>
             
             <ButtomIcon title="Entrar com Discord" />
         </View>

      </View>
    );
}