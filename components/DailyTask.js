import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from 'react'

export default function DailyTask() {
  return (
    <View style={styles.container}>
      <Text style={[styles.textColor,styles.textSize]}>DailyTask</Text>
      <Text style={styles.textColor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Text>
    
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Start Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
  
    backgroundColor: "black",
    width: 300,
    height: 200,
    borderRadius: 22,
  },
  textColor: {
      color: "white",
      
      marginLeft:15
    },
    textSize: {
      fontSize:30
  },
  buttonStyle: {
      marginTop: 20,
      marginLeft:150,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 120,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});