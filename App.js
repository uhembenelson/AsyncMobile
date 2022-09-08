/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Splash from './src/Screens/Splash';
import PasswordReset from './src/Screens/Auth/PasswordReset';
import Onboarding1 from './src/Screens/onboarding/Onboarding1';
import Onboarding2 from './src/Screens/onboarding/Onboarding2';
import Onboarding3 from './src/Screens/onboarding/Onboarding3';
import Signup from './src/Screens/Auth/Signup';
import Login from './src/Screens/Auth/Login';
import PasswordRecovery from './src/Screens/Auth/PasswordRecovery';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './src/Screens/Category/Category';
import Home from './src/Screens/Home/Home';

const Stack = createNativeStackNavigator();
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

<NavigationContainer>
<Stack.Navigator initialRouteName="Splash">
<Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
<Stack.Screen name="Onboarding1" component={Onboarding1} options={{headerShown: false}} />
<Stack.Screen name="Onboarding2" component={Onboarding2} options={{headerShown: false}} />
<Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
<Stack.Screen name="Onboarding3" component={Onboarding3} options={{headerShown: false}} />
<Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
<Stack.Screen name="PasswordRecovery" component={PasswordRecovery} options={{headerShown: false}} />
<Stack.Screen name="PasswordReset" component={PasswordReset} options={{headerShown: false}} />
<Stack.Screen name="Category" component={Category} options={{headerShown: false}} />
<Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
</Stack.Navigator>
</NavigationContainer>



    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
