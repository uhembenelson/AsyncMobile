import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import Botton from '../../components/Botton/Botton';
import SmallText from '../../components/SmallText/SmallText';
import BigText from '../../components/BigText/BigText';
export default function Category(props) {

    const Category = [{
        id:1,
        name:'Wedding',
    },
    {
        id:2,
        name:'Birthday',    
    },
    {   
        id:3,
        name:'Anniversary',

    },
    {
        id:4,
        name:'Baby Shower',
    },
    {
        id:5,
        name:'Graduation',
    },
    {
        id:6,
        name:'House Warming',
    },
    {
        id:7,
        name:'Funeral',
    },
    {
        id:8,
        name:'Tech Events',
    },
    {
        id:9,
        name:'Sports',
    },
    {
        id:10,
        name:'Red Carpet',
    },
    {
        id:11,
        name:'Movie Premiere',
    },
    {
        id:12,
        name:'Fashion Show',
    },
    {
        id:13,
        name:'Concert',
    },
    {
        id:14,
        name:'Fashion Show',    
    },
    {
        id:15,
        name:'Art Exhibition',
    },
    {
        id:16,
        name:'Conference',
    },
    {
        id:17,
        name:'Seminar',
    },
    {
        id:18,
        name:'Workshop',
    },
    {
        id:19,
        name:'Party',

    },
    {
        id:20,
        name:'Hangout',
    },
    {
        id:21,
        name:'Festival',
    },
    {
        id:22,  
        name:'bridal shower',
    },
    {
        id:23,
        name:'Bachelorette Party',

    },
    {
        id:24,
        name:'Bachelor Party',
    },
    {
        id:25,
        name:'Prom',
    },
    {
        id:26,
        name:'Reunion',

    },
    {
        id:27,
        name:'Retirement',
    },
    {
        id:28,
        name:'Engagement',
    },
    {
        id:29,
            name:'Politics',    
    },
    {
        id:30,
        name:'Trade fair',

    },
    {
        id:31,
        name:'Convention',
    },
    {
        id:32,
        name:'Business Meeting',
    },
    {
        id:33,
        name:'Networking Event',
    },
    {
        id:34,
        name:'Product Launch',
    },
    {
        id:35,
        name:'Award Ceremony',
    },
    {
        id:36,
        name:'Charity Event',
    },
    {
        id:37,
        name:'Fundraiser',
    },
    {
        id:38,
        name:'Religious Event',
    },
    {
        id:39,
        name:'Ceremony',
    },
    {
        id:40,
        name:'Other',
    },


    

]



  return (
   <SafeAreaView style={[styles.container]}>
    <ScrollView style={{marginVertical:30, marginHorizontal:20}}>
        <BigText
        style={{textAlign:'center', fontSize: 27}}
        label={'Select your favorite categories'}
        />
        <SmallText
        label={'you can choose more than one'}
        style={{textAlign:'center', fontSize: 16, fontWeight:'300', marginVertical:10}}
        />

        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', marginVertical:20}}>
        
           {
                Category.map((item, index,) => 
                <Botton style={{fontSize:16, backgroundColor:'#fff', color:'#000000'}} label={item.name} key={index}
                
                />
                   
                )
           }
        </View>
       
   </ScrollView>
    <View style={{marginHorizontal:20}}>
    <Botton
    onPress={() => props.navigation.navigate('Home')}
     style={{marginVertical:-5, fontSize:16, width:'100%' ,backgroundColor:'#000000', color:'#fff'}} label={'Continue'} />

   <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
   <SmallText
    label={'Skip for now'}
    style={{textAlign:'center', fontSize: 16, fontWeight:'300', marginVertical:10}}
    />
    </TouchableOpacity>
    </View>

  

    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        

    },

   text: {
    fontSize: 20,
    color: '#999999',
    textAlign: 'center',
  
   }
})