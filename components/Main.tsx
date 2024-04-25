import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import phrases from '../helpers/phrases';

const MainContent = () => {
  const twinklingText = useRef(new Animated.Value(0.3)).current;

  const [state, setState] = useState({
    result: false,
    answer: '',
  });

  const handleButtonClicked = () => {
    if (state.result) {
      setState({result: false, answer: ''});
      return;
    } else {
      setState({
        result: true,
        answer: phrases[Math.floor(Math.random() * phrases.length)],
      });
    }
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(twinklingText, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(twinklingText, {
          toValue: 0.7,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(twinklingText, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(twinklingText, {
          toValue: 0.3,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.MainView}>
      <Animated.View
        style={{
          opacity: twinklingText,
        }}>
        <Text style={styles.header}>Magic Ball 9</Text>
      </Animated.View>

      <View style={styles.centerDiv}>
        {!state.result ? (
          <View>
            <Text>Ask the Magic Ball any guestion</Text>
            <TouchableOpacity
              style={{backgroundColor: 'red', padding: 10}}
              onPress={handleButtonClicked}>
              <Text>Click to find out</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text>This is what I think!</Text>
            <Text>{state.answer}</Text>
            <TouchableOpacity onPress={handleButtonClicked}>
              <Text>Ask another question</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
    zIndex: 15,
    fontFamily: 'Caveat-Regular',
  },
  header: {
    fontSize: 56,
    marginBottom: 20,
    fontFamily: 'Caveat-Regular',
    color: 'white',
  },
  centerDiv: {
    height: '100%',
    position: 'absolute',
    marginBottom: 10,
    zIndex: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default MainContent;
