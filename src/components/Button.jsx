import { TouchableOpacity, Text,StyleSheet } from 'react-native'
import React from 'react'

const Button = ({btnText,handleNavigation}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={handleNavigation}>
      <Text style={styles.text}>{btnText}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn: {
      height: 50,
      padding: 10,
      backgroundColor:"#F4F4F4"
    },
    text:{
        textAlign:"center",
        color:'#00C464',
        fontSize:18,
    }
  })