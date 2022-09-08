import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Index from '../../components/onboardingImage/Index'
import image3 from '../../Assets/Images/image3.png';
import BigText from '../../components/BigText/BigText';
import SmallText from '../../components/SmallText/SmallText';
import count3 from '../../Assets/Images/count3.png';
import Botton from '../../components/Botton/Botton';
import InputBox from '../../components/InputBox/InputBox';



export default function PasswordRecovery({navigation}) {
    return (

        <SafeAreaView style={[styles.container]}>
           <View>
            <BigText
            label={'Recover Password'}
            style={{textAlign:'center', marginVertical:20}}
            />
            <SmallText
            label={'Enter your mail address we will send you a reset pin to enter on the next screen'}
            style={{textAlign:'center',fontWeight: '300',marginBottom:20}}
            />

           

             <InputBox
            style={{marginVertical:10, width:'100%', borderColor:'#C4C4C4'}}
            placeholder={'enter your email'}
            onChangeText={() => {}}
            value={''}
            />

            



            <View style={[styles.bottonContainer]}>
            <Botton
            onPress={()=> navigation.navigate('PasswordReset')}
            style={{backgroundColor:'#000000', color:'#ffffff',width:'100%'}}
            label={'Send'}
            />

            
           
           </View>
           </View>

           
          
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
    },
    image: {
        width: 62,
        height: 14,
        marginHorizontal: 30,

    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    bottonContainer: {
        marginVertical: 10,
    }

})
