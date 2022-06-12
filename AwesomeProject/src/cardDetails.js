import React from "react"
import {View,Text,Image,StyleSheet, Button, Alert, TouchableOpacity} from "react-native"

export const CardDetails=(textData,img)=> {
  return (
    <View>
        <Text>{textData}</Text>
        <Image source={{uri:{img}}}></Image>
    </View>
  )
}
