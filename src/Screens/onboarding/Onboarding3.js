import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Index from '../../components/onboardingImage/Index'
import image3 from '../../Assets/Images/image3.png';
import BigText from '../../components/BigText/BigText';
import SmallText from '../../components/SmallText/SmallText';
import count3 from '../../Assets/Images/count3.png';
import Botton from '../../components/Botton/Botton';



export default function Onboarding3({navigation}) {
    return (

        <SafeAreaView style={[styles.container]}>
            <View>
                <Index image={image3} />
                <BigText style={{ marginVertical: 15, textAlign: 'center', fontSize:25, fontWeight:'500' }} label="Get notified when a picture 
of you is posted" />
                <SmallText style={{ textAlign: 'center', fontWeight: '300', marginBottom: 30 }} label="Never go unnotices, we will track all pictures of you and send you a Hi 5 " />

                <View style={[styles.imageContainer]}>
                    <Image source={count3} style={styles.image} />
                </View>

            </View>

            <View style={[styles.bottonContainer]}>
                <Botton style={{backgroundColor:'#fff', color:'#000000'}} label="Skip" 
                onPress={()=> navigation.navigate('Signup')}
                />
                <Botton 
                  onPress={()=> navigation.navigate('Signup')}
                style={{backgroundColor:'#000000', color:'#ffffff'}} label="Get Started"  />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'space-between',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    }

})
