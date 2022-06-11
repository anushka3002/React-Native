import React from "react"
import {File} from "./src/file"
import {Name} from "./src/name"
import {View,Text,StyleSheet} from "react-native"
import { Flat } from "./src/new"

const App=()=>{
  const Name="Anushka"
    return(
    <View>
      <Text style={styles.textStyle}>hello anushka :)</Text>
      <Text style={styles.blue}>Welcome to my channel</Text>
      <Text style={styles.font}>I love react</Text>
      <Text style={styles.blue}>hi my name is {Name}</Text>
      <File/>
      <Flat/>
    </View>
     
    )
    
}

const styles = StyleSheet.create({
textStyle:{
  color:"red",
  margin:100
},
blue:{
  color:"blue",
  fontSize:40
},
font:{
  fontSize:30
}
})

export default App