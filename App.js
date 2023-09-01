import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DailyTask from './components/DailyTask';
import Subjects from './components/Subjects';
import OldPapers from './components/OldPapers';
import OtherBox from './components/OtherBox';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.align}>
        <Subjects />
        <DailyTask />

        <OldPapers />
        <OtherBox />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6d6d6",
  },
  align: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
