import { FlatList, Text, View,StyleSheet,Image } from 'react-native'
import React from 'react'

export const Flat=() =>{
    // making an array of data to show on DOM 
    const names=[
        {image:"https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/d517ae40ec1a6837fb755d865937ed07.jpg",index:"1",name:"Anushka"},
        {image:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",index:"2",name:"Priya"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44GnPeqorpmVR5uxIwP5g_tJL3nJSoplFQ5OOQZD-S1ekdWATgzQQSmCD7_HMl1hsiNc&usqp=CAU",index:"3",name:"Sakshi"},
        {image:"https://assets.mubicdn.net/images/notebook/post_images/19893/images-w1400.jpg?1449196747",index:"4",name:"Code"},
    ]
  
    return (
      <View>
        {/* in react-native we can't use map or forEach so we use FlatList */}
        <FlatList style={styles.listStyle}
        // just use the horizontal prop to show the list horizontally so simple
        horizontal
        // use showsVerticalScrollIndicator to hide the scrollbar
        showsHorizontalScrollIndicator={false}
        // use keyExtractor prop to use any other keyword in place of key in the data
        keyExtractor={(index)=>{
            return index.index
        }}
        data={names} renderItem={({item})=>{
            return ( 
                <View>
            {/* <Text style={styles.textstyle}>{item.name}</Text> */}
            <Image style={styles.image} source={{uri:item.image}}></Image>
            </View>
            )
        }}></FlatList>
      </View>
    )

   
}
const styles= StyleSheet.create({
    textstyle:{
        fontSize:40,
        padding:30,
        backgroundColor:"blue",
        margin:20,
        color:"white"
    },
    listStyle:{
        textAlign:"center",
        margin:20,
        padding:10
    },
    image:{
        width:200,
        height:200,
        margin:5
    }
})


