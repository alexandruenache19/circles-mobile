/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Transitions } from '_navigation'
const { goToApp } = Transitions

const App: () => React$Node = () => {
  goToApp()
  return (
    <SafeAreaView>

    </SafeAreaView>
  );
};

export default App;
