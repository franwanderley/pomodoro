import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import ProgresssCircle from 'react-native-progress-circle';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pomodoro</Text>
        <View style={styles.viewType}>
          <Text style={[
            styles.type, { backgroundColor: '#f87070', color: '#4f2d43' }
          ]}>pomodoro</Text>
          <Text style={styles.type}>short break</Text>
          <Text style={styles.type}>long break</Text>
        </View>
      </View>
      <View style={styles.viewTime}>
        <ProgresssCircle
          percent={30}
          radius={150}
          borderWidth={5}
          color="#f87070"
          shadowColor="#151932"
          bgColor="#151932"
        >
          <Text style={styles.time}>06:00</Text>
          <Text style={styles.timeOption}>PAUSE</Text>
        </ProgresssCircle>
      </View>
      <View style={styles.viewConfig}>
        <Icon style={{marginTop: 20, color: '#ced8f4', fontSize: 30}} name="settings" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2140',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ced8f4',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
  },
  time: {
    color: '#ced8f4',
    fontSize: 70,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  viewType: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    borderRadius: 100,
    backgroundColor: '#151932',
  },
  type: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#616580',
    fontSize: 15,
  },
  viewTime: {
    marginTop: 60,
  },
  timeOption: {
    fontSize: 15,
    marginTop: 20,
    letterSpacing: 8,
    color: '#ced8f4',
  },
  viewConfig: {
    marginTop: 20,
  }

});
