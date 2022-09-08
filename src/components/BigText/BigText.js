import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
export default function BigText(props) {
  return (
    <View>
    <Text style={[styles.text, props.style]}>{props.label}</Text>
     </View>
  );
}

const styles = StyleSheet.create({
   text: {
    fontSize: 40,
    color: '#000000',
   }
})
