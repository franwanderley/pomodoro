import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Modal, TouchableOpacity, View, TouchableHighlight } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import ProgresssCircle from 'react-native-progress-circle';
import { Home } from './src/pages/Home';
import { ConfigProvider } from './src/context/ConfigContext';

export default function App() {
  return (
    <ConfigProvider>
      <Home/>
    </ConfigProvider>
  );
}
