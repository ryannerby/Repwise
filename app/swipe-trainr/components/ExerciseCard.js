import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ExerciseCard({ name, gifUrl }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: gifUrl }} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
