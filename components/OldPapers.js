import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function OldPapers() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Old PSC Question Papers</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#2a1616",
    width: 300,
    height: 110,
        borderRadius: 22,
    alignItems: "center",
    },
    textStyle: {
        color: "white",
         fontSize:20,
  },
        
    
});