import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity} from 'react-native';
export default function Botton(props) {
  return (
    <TouchableOpacity
    onPress={props.onPress}
    style={[styles.container, props.style]}>
    <Text style={[styles.text, props.style]}>{props.label}</Text>
     </TouchableOpacity>
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