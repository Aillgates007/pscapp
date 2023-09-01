import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import React from 'react'

export default function Subjects() {
    return (
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.box, styles.box1]}>
          <Text>History</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text>Maths</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text>English</Text>
        </View>
        <View style={[styles.box, styles.box4]}>
          <Text>social Science</Text>
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
      marginTop:60,
    width: 140,
    height: 170,
    borderRadius: 25,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  box1: {
    backgroundColor: "#fed872",
  },
  box2: {
    backgroundColor: "#fb826f",
  },
  box3: {
    backgroundColor: "#3a8df2",
  },
  box4: {
    backgroundColor: "#ffce1a",
  },
});


