import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import search from '../../Assets/Icons/search.png';
import bell from '../../Assets/Icons/bell.png';
export default function SearchBox(props) {
  return (
   <View style={{flexDirection:'row', justifyContent:'space-between'}}>
     <View style={[styles.container, props.style]}>
       <View >
       <Image source={search} style={{marginHorizontal:5, width:20, height:20}} />
       </View>
      <TextInput
      style={{marginHorizontal:10}}
      placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
     </View>

     <View style={{alignItems:'center', justifyContent:'center'}}>
       <Image source={bell} style={{marginHorizontal:5, width:25, height:25}} />
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
       
        borderRadius: 5,
        borderWidth: 1,
        width:'85%', 
        borderColor:'#C4C4C4',
        flexDirection:'row',
        alignItems:'center',
       
        


    },

   text: {
    fontSize: 20,
    color: '#999999',
    textAlign: 'center',
  
   }
})