import React, { useEffect } from "react"
import {SafeAreaView} from "react-native"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Image } from "react-native";

import Signup from "./src/screens/auth/Signup/Index";
import Signin from "./src/screens/auth/Signin/Index";
import Splash from "./src/screens/auth/Splash/Index";

import Home from "./src/screens/app/Home/Index"
import Favorites from './src/screens/app/Favorties/Index';
import Profile from './src/screens/app/Profile/Index';

import { colors } from "./src/utils/colors";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const WEB_CLIENT_ID = '740037864403-i7vh1t15av5o9pcm2b39d0738r4ifqre.apps.googleusercontent.com'
const IOS_CLIENT_ID = '740037864403-mggr1o8p7j8ld8ca814jdalhs8n3qvo1.apps.googleusercontent.com'
const REVERSED_CLIENT_ID = 'com.googleusercontent.apps.740037864403-mggr1o8p7j8ld8ca814jdalhs8n3qvo1'

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/tabs/home_active.png')
            : require('./src/assets/tabs/home.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/tabs/bookmark_active.png')
            : require('./src/assets/tabs/bookmark.png');
        } else if (route.name === 'Profile') {
          icon = focused
            ? require('./src/assets/tabs/profile_active.png')
            : require('./src/assets/tabs/profile.png');
        }

        return <Image style={{ width: 24, height: 24 }} source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightGray }
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const App = () => {
  const isSignedIn = true;

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: IOS_CLIENT_ID,
    })
  }, [])
  
  const theme = {
    colors: {
      background: colors.white
    },
  };

  return (
    <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
      {
              isSignedIn ? (
                <>
                  <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
                </>
              ) : (
                <>
                  <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                  <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
                  <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                </>
              )
            }
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default  React.memo(App)