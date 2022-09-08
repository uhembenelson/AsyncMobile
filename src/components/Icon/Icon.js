import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity, Image} from 'react-native';
export default function Icon(props) {
  return (
   <View>
    <Image source={props.icon}  style={[props.style]} />
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        justifyContent:'center',
        borderRadius: 5,
        width: '43%',
        borderWidth: 1.5,
        borderColor: '#000000',
        marginVertical: 10,

    },

   text: {
    fontSize: 20,
    color: '#999999',
    textAlign: 'center',
  
   }
})