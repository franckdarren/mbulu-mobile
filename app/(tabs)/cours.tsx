import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Apprendre une lecon</Text>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
