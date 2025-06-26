import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import WorkoutHeader from '../components/WorkoutHeader';
import ExerciseCard from '../components/ExerciseCard';
import SliderControl from '../components/SliderControl';

const exercises = [
  { id: 1, name: 'Push Up', gifUrl: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Pull Up', gifUrl: 'https://via.placeholder.com/200' },
];

export default function WorkoutScreen({ route, navigation }) {
  const { day } = route.params;
  const [index, setIndex] = useState(0);
  const [weight, setWeight] = useState(50);
  const [reps, setReps] = useState(10);
  const translateX = useSharedValue(0);

  const onGestureEvent = Animated.event([{ nativeEvent: { translationX: translateX } }], { useNativeDriver: true });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleGestureEnd = () => {
    if (translateX.value > 50 && index > 0) {
      setIndex(index - 1);
    } else if (translateX.value < -50 && index < exercises.length - 1) {
      setIndex(index + 1);
    }
    translateX.value = withSpring(0);
  };

  const current = exercises[index];

  return (
    <View style={styles.container}>
      <WorkoutHeader day={day} muscleGroup="Upper Body" />
      <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={handleGestureEnd}>
        <Animated.View style={[animatedStyle, { alignItems: 'center' }]}>
          <ExerciseCard name={current.name} gifUrl={current.gifUrl} />
        </Animated.View>
      </PanGestureHandler>
      <SliderControl label="Weight" value={weight} onChange={setWeight} max={200} />
      <SliderControl label="Reps" value={reps} onChange={setReps} max={20} />
      <View style={styles.buttonRow}>
        <Button title="Previous" onPress={() => index > 0 && setIndex(index - 1)} />
        <Button title="Next" onPress={() => index < exercises.length - 1 && setIndex(index + 1)} />
      </View>
      <Button title="Finish" onPress={() => navigation.navigate('Summary')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
});
