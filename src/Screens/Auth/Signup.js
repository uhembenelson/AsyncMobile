import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Index from '../../components/onboardingImage/Index'
import image3 from '../../Assets/Images/image3.png';
import BigText from '../../components/BigText/BigText';
import SmallText from '../../components/SmallText/SmallText';
import count3 from '../../Assets/Images/count3.png';
import Botton from '../../components/Botton/Botton';
import InputBox from '../../components/InputBox/InputBox';



export default function Signup({navigation}) {
    return (

        <SafeAreaView style={[styles.container]}>
           <View>
            <BigText
            label={'Sign Up'}
            style={{textAlign:'center', marginVertical:20}}
            />
            <SmallText
            label={'Create an account and connect!'}
            style={{textAlign:'center',fontWeight: '300',marginBottom:20}}
            />

            <InputBox
            style={{marginVertical:10, width:'100%', borderColor:'#C4C4C4'}}
            placeholder={'enter your username'}
            onChangeText={() => {}}
            value={''}
            />

             <InputBox
            style={{marginVertical:10, width:'100%', borderColor:'#C4C4C4'}}
            placeholder={'enter your email'}
            onChangeText={() => {}}
            value={''}
            />

             <InputBox
            style={{marginVertical:10, width:'100%', borderColor:'#C4C4C4'}}
            placeholder={'enter your password'}
            onChangeText={() => {}}
            value={''}
            />



            <View style={[styles.bottonContainer]}>
            <Botton
             onPress={()=> navigation.navigate('Category')}
            style={{backgroundColor:'#000000', color:'#ffffff',width:'100%'}}
            label={'Create Account'}
            />

            <TouchableOpacity
            onPress={()=> navigation.navigate('Login')}
            >
            <SmallText
           label={'Already have an account? Login'}
           style={{color:'#000000', textAlign:'center',fontWeight: '300', fontSize:16, marginTop:10}}
           />
            </TouchableOpacity>
             <SmallText
           label={'By signing up, you agree to our Terms of Service and Privacy Policy'}
           style={{textAlign:'center',fontWeight: '300', fontSize:14, marginTop:10}}
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
