import { FlatList, Text, View,StyleSheet } from 'react-native'
import React from 'react'

export const Flat=() =>{
    const names=[
        {name:"Anushka"},
        {name:"Priya"},
        {name:"Sakshi"},
        {name:"Code"},
    ]
  
    return (
      <View>
        <FlatList data={names} renderItem={(element)=>{
            return ( 
            <Text style={styles.textlist}>{element.item.name}</Text>
            )
        }}></FlatList>
      </View>
    )

   
}
const styles= StyleSheet.create({
    textlist:{
        fontSize:40
    }
})


