import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Index from '../../components/onboardingImage/Index'
import image1 from '../../Assets/Images/image1.png';
import BigText from '../../components/BigText/BigText';
import SmallText from '../../components/SmallText/SmallText';
import count from '../../Assets/Images/count.png';
import Botton from '../../components/Botton/Botton';



export default function Onboarding1({navigation}) {
    return (

        <SafeAreaView style={[styles.container]}>
            <View>
                <Index image={image1} />
                <BigText style={{ marginVertical: 15, textAlign: 'center',fontSize:25, fontWeight:'500' }} label="Find pictures of just you, fast and smoothly " />
                <SmallText style={{ textAlign: 'center', fontWeight: '300', marginBottom: 30 }} label="Find pictures of just you, fast and smoothly " />

                <View style={[styles.imageContainer]}>
                    <Image source={count} style={styles.image} />
                </View>

            </View>

            <View style={[styles.bottonContainer]}>
                <Botton style={{backgroundColor:'#fff', color:'#000000'}} label="Skip" 
                onPress={()=> navigation.navigate('Signup')}
                />
                <Botton 
                  onPress={()=> navigation.navigate('Onboarding2')}
                style={{backgroundColor:'#000000', color:'#ffffff'}} label="Next"  />
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
