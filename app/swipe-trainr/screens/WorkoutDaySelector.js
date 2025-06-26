import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function WorkoutDaySelector({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Workout Day</Text>
      {days.map((day) => (
        <TouchableOpacity key={day} style={styles.button} onPress={() => navigation.navigate('Workout', { day })}>
          <Text style={styles.buttonText}>{day}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    padding: 12,
    backgroundColor: '#2e86de',
    borderRadius: 4,
    marginVertical: 4,
    width: '60%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
