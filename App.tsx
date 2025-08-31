import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Import Screens
import Dashboard from './app/Dashboard';
import GoalsScreen from './app/GoalsScreen';
import TimerScreen from './app/TimerScreen';
import RoutineScreen from './app/RoutineScreen';
import CalendarScreen from './app/CalendarScreen';
import ReportsScreen from './app/ReportsScreen';
import AchievementsScreen from './app/AchievementsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#6A5AED',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => {
            const icons: { [key: string]: [string, string] } = {
                Dashboard: ['grid', 'grid-outline'],
                Goals: ['golf', 'golf-outline'],
                Timer: ['timer', 'timer-outline'],
                Routines: ['list', 'list-outline'],
                Calendar: ['calendar', 'calendar-outline'],
                Reports: ['bar-chart', 'bar-chart-outline'],
                Awards: ['trophy', 'trophy-outline'],
            };
            const [icon, outlineIcon] = icons[route.name];
            return <Icon name={focused ? icon : outlineIcon} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Goals" component={GoalsScreen} />
        <Tab.Screen name="Timer" component={TimerScreen} />
        <Tab.Screen name="Routines" component={RoutineScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Reports" component={ReportsScreen} />
        <Tab.Screen name="Awards" component={AchievementsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    elevation: 8,
    height: Platform.OS === 'ios' ? 90 : 70,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
    paddingTop: 10,
  },
});

export default App;