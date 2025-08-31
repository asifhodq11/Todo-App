import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Task } from '../types';
import { Card } from './ui/Card';
import { Checkbox } from './ui/Checkbox';
import { Badge } from './ui/Badge';

interface TaskCardProps {
  task: Task;
  onToggle: (task: Task) => void;
}

export const TaskCard = ({ task, onToggle }: TaskCardProps) => (
  <Animated.View>
      <Card style={[styles.taskCard, task.isCompleted && styles.taskCardCompleted]}>
        <View style={styles.taskContainer}>
          <Checkbox isChecked={task.isCompleted} onToggle={() => onToggle(task)} />
          <View style={styles.taskTextContainer}>
            <Text style={[styles.taskTitle, task.isCompleted && styles.completedText]}>{task.title}</Text>
            {task.description && 
              <Text style={styles.taskDescription}>{task.description}</Text>}
          </View>
          <Badge text={task.priority} type={task.priority} />
        </View>
      </Card>
  </Animated.View>
);

const styles = StyleSheet.create({
  taskCard: {
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskCardCompleted: {
      backgroundColor: '#f9fafb',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  taskDescription: {
    fontSize: 12,
    color: 'gray',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});