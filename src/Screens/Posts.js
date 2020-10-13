import React from 'react'
import { View,Text, Image, StyleSheet, } from 'react-native'

export default function Posts({route}) {
   
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={route.params.image}/>
            <Text style={styles.name}>{route.params.name}</Text>
            <View style={styles.info}>
       <Image source={route.params.profile} style={styles.profile}/>
       <Text style={styles.petdetails}>{route.params.author} </Text>
       <View style={styles.dot}></View>
       <Text style={styles.petdetails}>{route.params.read}</Text>
       </View>
           
            <Text style={styles.post} >{route.params.text}</Text>

           
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
    },
   
    
    image: {
      height: 250,
      width: 323,
      borderRadius: 5,
      marginHorizontal: 25,
      marginTop: 15,
    },

    name:{
        fontSize:19,
        fontWeight:"bold",
        marginHorizontal:25,
        marginTop: 15,
    },
    profile: {
        marginHorizontal: 25,
        marginTop:-5,
        width: 25,
        height: 25,
        borderRadius: 50,
      },

      post:{
          marginHorizontal:25,
          marginTop:20,
          fontSize:18,
          lineHeight: 27
      },
   
   
   
  
    dot:{
        height:15,
        width:5,
        borderRadius:50,
        color: 'white',
        position: 'relative',
  
    },
  
    info:{
        flexDirection: 'row',
        position: 'relative',
        top: 10,
    }
  });
  