import React, { useEffect } from 'react';
import { Container } from './styles';
import SpotiFyLogo from '../../assets/Spotify_logo.svg'
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import { CommonActions, useNavigation } from '@react-navigation/native';
export function Splash() {
  const navigation = useNavigation<any>()
  const logoAnimated = useSharedValue(0)
  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        logoAnimated.value,
        [0, 100],
        [1, 0])
    }
  })

  function startApp() {
    navigation.navigate('Home'),
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'Home' }],
        }))
  }

  useEffect(() => {
    logoAnimated.value = withTiming(
      100,
      { duration: 1000 },
      () => {
        'worklet'
        runOnJS(startApp)()
      }
    )
  }, [])



  return (
    <Container>
      <Animated.View style={logoStyle}>
        <SpotiFyLogo width={150} height={150} />
      </Animated.View>
    </Container>
  )
}