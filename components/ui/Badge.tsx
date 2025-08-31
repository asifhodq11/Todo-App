import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TaskPriority } from '../../types';

interface BadgeProps {
  text: TaskPriority;
  type: TaskPriority;
}

export const Badge = ({ text, type }: BadgeProps) => {
  const badgeStyles = {
    Low: { backgroundColor: '#d1fae5', color: '#065f46' },
    Medium: { backgroundColor: '#fed7aa', color: '#9a3412' },
    High: { backgroundColor: '#fecaca', color: '#991b1b' },
  };

  return (
    <View style={[styles.badge, { backgroundColor: badgeStyles[type].backgroundColor }]}>
      <Text style={[styles.badgeText, { color: badgeStyles[type].color }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
});