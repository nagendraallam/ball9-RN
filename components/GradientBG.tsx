import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, Image, Animated} from 'react-native';
import {LinearGradient, RadialGradient} from 'react-native-gradients';

const GradientBG = () => {
  const twinklingStar1 = useRef(new Animated.Value(0)).current;
  const twinklingStar2 = useRef(new Animated.Value(0)).current;

  const [colorList, setColorList] = useState([
    {offset: '0%', color: '#6B4984', opacity: '1'},
    {offset: '29%', color: '#483475', opacity: '1'},
    {offset: '67%', color: '#141852', opacity: '1'},
    {offset: '100%', color: '#070B34', opacity: '1'},
  ]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(twinklingStar1, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(twinklingStar1, {
          toValue: 0,
          duration: 3999,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(twinklingStar2, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(twinklingStar2, {
            toValue: 0,
            duration: 3999,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }, 500);
  }, []);

  return (
    <View style={[styles.gradientBg]}>
      <Animated.View
        style={{
          opacity: twinklingStar1,
          zIndex: 1,
          width: '100%',
          position: 'absolute',
          height: '100%',
        }}>
        <Image
          source={require('../images/star.png')}
          width={100}
          height={100}
          style={{
            position: 'absolute',
            zIndex: 1,
            top: '20%',
            left: '20%',
          }}
        />

        <Image
          source={require('../images/star.png')}
          width={100}
          height={100}
          style={{
            position: 'absolute',
            zIndex: 1,
            top: '30%',
            left: '95%',
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          opacity: twinklingStar2,
          zIndex: 1,
          width: '100%',
          position: 'absolute',
          height: '100%',
        }}>
        <Image
          source={require('../images/star.png')}
          width={100}
          height={100}
          style={{
            position: 'absolute',
            zIndex: 1,
            top: '40%',
            left: '30%',
          }}
        />

        <Image
          source={require('../images/star.png')}
          width={100}
          height={100}
          style={{
            position: 'absolute',
            zIndex: 1,
            top: '20%',
            left: '65%',
          }}
        />
      </Animated.View>

      <LinearGradient colorList={colorList} angle={90} />
    </View>
  );
};

const styles = StyleSheet.create({
  gradientBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default GradientBG;
