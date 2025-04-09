import React from 'react';
import { TouchableOpacity, View, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

interface GradientSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const GradientSwitch: React.FC<GradientSwitchProps> = ({ value, onValueChange }) => {
  const translateX = React.useRef(new Animated.Value(value ? 20 : 0)).current;

  React.useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? 20 : 0,
      useNativeDriver: true,
    }).start();
  }, [value]);

  const toggleSwitch = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onValueChange(!value);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleSwitch}
      style={styles.container}
    >
      {value ? (
        <LinearGradient
          colors={['#8F65F8', '#483185']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.track}
        />
      ) : (
        <View style={[styles.track, styles.inactiveTrack]} />
      )}
      <Animated.View
        style={[
          styles.thumb,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 28,
    borderRadius: 14,
    padding: 2,
  },
  track: {
    position: 'absolute',
    width: '110%',
    height: '120%',
    borderRadius: 14,
  },
  inactiveTrack: {
    backgroundColor: '#E5E7EB',
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default GradientSwitch;
