import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DiscoverList from './src/Screens/DiscoverList';
import Posts from './src/Screens/Posts';
import {EvilIcons, Ionicons, Feather} from '@expo/vector-icons';

const Stack = createStackNavigator()
export default function App() {
  return (
   <NavigationContainer  screenOptions={{
    headerBackTitleVisible: false
  }}>
     <Stack.Navigator>
       <Stack.Screen options={{headerRight:()=>(<EvilIcons style={{marginRight:25}} name="search" size={24} color="grey" />), headerLeft:()=>(<Ionicons style={{marginLeft:25}} name="ios-keypad" size={24} color="grey" />)}} name="Discover" component={DiscoverList}/>
       <Stack.Screen options={{ title: 'Beauty', headerBackTitleVisible: false, headerTitleAlign:'left', headerRight:()=>(<View style={styles.icons}><Feather style={styles.headphone} name="headphones" size={18} color="black" /><EvilIcons name="heart" size={24} color="black" /><EvilIcons style={styles.like} name="share-google" size={24} color="black" /></View>)}} name="Post" component={Posts}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },

  

  icons:{
    flexDirection: 'row',
    marginHorizontal: 8
  }
});
