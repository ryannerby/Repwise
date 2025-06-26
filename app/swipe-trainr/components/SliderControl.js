import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function SliderControl({ label, value, onChange, min = 0, max = 100 }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}: {value}</Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={min}
        maximumValue={max}
        value={value}
        onValueChange={onChange}
        step={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
});
