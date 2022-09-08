import React , {useEffect, useState }from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import logo from '../Assets/Images/logo.png';
export default function Index({navigation}) {
 
const[firstTime, setFirstTime] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if(firstTime){
        navigation.navigate('Onboarding1');
      }
    }, 3000);
  }, []);
  
  return (
    <View style={[styles.container]} >
     <Image source={logo} style={styles.image} />
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }, 
    image: {
        width: 148, 
        height: 101,
    }
    
})