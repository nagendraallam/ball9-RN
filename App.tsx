import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {RadialGradient} from 'react-native-gradients';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GradientBG from './components/GradientBG';
import MainContent from './components/Main';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  };

  const statusBarStyle = {
    backgroundColor: 'transparent',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'white-content'}
        backgroundColor={statusBarStyle.backgroundColor}
        translucent={true}
      />
      <MainContent />
      <GradientBG />
    </SafeAreaView>
  );
}

export default App;
