import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SummaryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Summary</Text>
      <Text>Great job! Check your PRs and total volume soon.</Text>
      <Button title="Back to Start" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
});
