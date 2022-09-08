import React from 'react';
import { View, Text , StyleSheet, Image, Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default function Index(props) {
  return (
    <View>
     <Image source={props.image} style={styles.image} />

     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: screenHeight/2,
        borderRadius: 35,
    }
})
