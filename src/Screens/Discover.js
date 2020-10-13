import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {} from '@expo/vector-icons'

function Discover({ name, read, profile, author, image, text, navigation }) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('Post', {name: name, read, profile, author, image, text}) }>
        <View style={styles.imageContainer}>
       
       <Image source={image} style={styles.images} />

       <View style={styles.textContainer}>
       <Text style={styles.name}>{name}</Text>
       <View style={styles.info}>
       <Image source={profile} style={styles.profile}/>
       <Text style={styles.details}>{author} </Text>
       <View style={styles.dot}></View>
       <Text style={styles.details}>{read}</Text>
       </View>
      
     </View>
     </View>
        </TouchableOpacity>
      
     
    </View>
  );
}
export default Discover;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 25,
  },
  imageContainer: {
    backgroundColor: "white",
    height: 140,
    width: 320,
    flexDirection: 'row'
   
  },
  textContainer: {
      marginLeft: 20,
    
  },
  images: {
    height: 110,
    width: 90,
    borderRadius: 5,
    position: 'relative',
    top:15,
    left: 10
  },
  name: {
    marginHorizontal: 2,
    color: "black",
    fontSize: 18,
    fontWeight: '400',
    marginTop: 12,
    width: 190,
  },
  details: {
    marginHorizontal: 5,
    color: "#BEB8C7",
    fontSize: 10,
    marginBottom: 3,
    position: 'relative',
    top: 6,
  },
  profile: {
    marginHorizontal: 10,
    marginBottom: 3,
    width: 25,
    height: 25,
    borderRadius: 50,
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
      top: 35,
  }
});
