# How create a Splash animated

Lets create a sophisticated splash animated that the logo will disappear
![animation image](https://user-images.githubusercontent.com/58709086/207753484-cd12d855-4777-4163-acbd-5363396a720c.png)

## Step one:

 Install the library react-native-reanimated in your project and follow the [documentation](https://docs.swmansion.com/react-native-reanimated/) to configure
 
 ```npm install react-native-reanimated```
 
or

```yarn add react-native-reanimated```

## Step two:

add one screen on your routes with the name **Splash** and put as initial route

```
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { Splash } from '../screens/Splash';

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator 
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Splash" component={Splash}/>
      <Screen name="Home" component={Home}/>
    </Navigator>
  )
}
```

## Step three:

In the Splash screen add the hook **useSharedValue**, this will be the value of the animation.
using the **useAnimatedStyle** you will to modify the style properties of the **Animation.View** that in this case will be the opacity

```
import React from 'react';
import { Container } from './styles';
import SpotiFyLogo from '../../assets/Spotify_logo.svg'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  
} from 'react-native-reanimated';

export function Splash() {
  const logoAnimated = useSharedValue(0)
  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        logoAnimated.value,
        [0, 100],
        [1, 0])
    }
  })

  return (
    <Container>
      <Animated.View style={logoStyle}>
        <SpotiFyLogo width={150} height={150} />
      </Animated.View>
    </Container>
  )
}
```

## Step four:

Still in the splash screen, add a useEffect to when the aplication start, change the **useSharedValue**. Use the **withTiming** to the value going 1 to 100 softly with 1 second of duration

Use one CallBack to call the startApp function. You need add the "worklet" because the animation and the javascript code run on different threads
 
```
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
```


## Finish 🎉


 
