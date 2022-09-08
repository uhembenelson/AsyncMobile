import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
export default function SmallText(props) {
  return (
    <View>
    <Text style={[styles.text, props.style]}>{props.label}</Text>
     </View>
  );
}

const styles = StyleSheet.create({
   text: {
    fontSize: 20,
    color: '#999999',
   }
})