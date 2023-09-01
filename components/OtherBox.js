import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'

export default function OtherBox() {
  return (
    <ScrollView horizontal style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textsytle}>PSC Tips & Tricks</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.textsytle}>Maths</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.textsytle}>English</Text>
      </View>
      {/* Add more items here */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", // Horizontal scrolling
        padding: 10,
    },
    box: {
        width: 140,
        height: 100,
        borderRadius: 25,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black"
    },
    textsytle: {
        color: "white",
        fontWeight: "bold",
        fontSize:10
    }
})