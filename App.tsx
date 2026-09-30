/**
 * Sample React Native App
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View
        style={[
          styles.container,
          {
            backgroundColor: isDarkMode ? '#000' : '#fff',
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            {
              color: isDarkMode ? '#fff' : '#000',
            },
          ]}
        >
          Hello React Native
        </Text>

        <Text
          style={[
            styles.subtitle,
            {
              color: isDarkMode ? '#aaa' : '#666',
            },
          ]}
        >
          My first React Native app
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
  },
});

export default App;
