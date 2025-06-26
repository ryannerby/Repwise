import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkoutHeader({ day, muscleGroup }) {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.group}>{muscleGroup}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  group: {
    fontSize: 16,
    color: '#666',
  },
});
