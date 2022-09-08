import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import SearchBox from '../../components/SearchBox/SearchBox';
import BigText from '../../components/BigText/BigText';

export default function Dashboard() {
  return (
    <SafeAreaView>
     <ScrollView style={{marginHorizontal:15, marginVertical:15}}>
     <SearchBox />
     <BigText
     label="Trending Categories"
     style={{fontSize: 20, color: '#000000', fontWeight: '400', marginVertical: 20}}
     />
      </ScrollView>
     </SafeAreaView>
  );
}

