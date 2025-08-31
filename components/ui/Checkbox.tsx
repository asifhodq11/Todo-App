import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Checkbox = ({ isChecked, onToggle }: { isChecked: boolean; onToggle: () => void }) => {
    const animatedValue = useRef(new Animated.Value(isChecked ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: isChecked ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [isChecked]);

    const scale = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 1],
    });

    return (
        <TouchableOpacity onPress={onToggle}>
            <Animated.View style={[styles.checkboxBase, isChecked && styles.checkboxChecked, {transform: [{scale}]}]}>
                {isChecked && <Icon name="checkmark" size={20} color="#FFF" />}
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
   checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#6A5AED',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#6A5AED',
  },
});