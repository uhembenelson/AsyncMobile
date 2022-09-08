import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity, TextInput} from 'react-native';
export default function InputBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
      style={{marginHorizontal:20}}
      placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        justifyContent:'center',
        borderRadius: 5,
        borderWidth: 1,
        width:'100%', 
        borderColor:'#C4C4C4',
       
        


    },

   text: {
    fontSize: 20,
    color: '#999999',
    textAlign: 'center',
  
   }
})