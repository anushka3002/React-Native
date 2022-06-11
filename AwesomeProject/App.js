import React from "react"
import {File} from "./src/file"
import {View,Text,StyleSheet} from "react-native"
import { Flat } from "./src/new"

const App=()=>{
  const Name="Anushka"
    return(
      // view works as div 
    <View>
      {/* you need to use text tag to write any text and don't forget to import it before use  */}
      <Text style={styles.textStyle}>hello anushka :)</Text>
      {/* style is used in a bit different way in react-native(here in place of styles you can use anything like for styles.blue can be written as addingcss.blue ) */}
      <Text style={styles.blue}>Welcome to my channel</Text>
      <Text style={styles.font}>I love react</Text>
      {/* the name keyword in the curly braces in line 18 is a variable defined in line 8 which is being used here...just to show usecase of javascript */}
      <Text style={styles.blue}>hi my name is {Name}</Text>
      {/* importing the File and Flat component in line 20 and 21 from the File file from src same as react*/}
      <File/>
      <Flat/>
    </View>
     
    )
    
}

// StyleSheet.create is the syntax for styling
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