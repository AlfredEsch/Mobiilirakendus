import React, { useEffect } from "react";
import {SafeAreaView} from "react-native"
import Signin from "./src/screens/auth/SignIn/Index";
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const WEB_CLIENT_ID = '740037864403-i7vh1t15av5o9pcm2b39d0738r4ifqre.apps.googleusercontent.com'
const IOS_CLIENT_ID = '740037864403-mggr1o8p7j8ld8ca814jdalhs8n3qvo1.apps.googleusercontent.com'
const REVERSED_CLIENT_ID = 'com.googleusercontent.apps.740037864403-mggr1o8p7j8ld8ca814jdalhs8n3qvo1'

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: IOS_CLIENT_ID,
    })
  }, [])
  return (
    <SafeAreaView>
      <Signin/>
    </SafeAreaView>
  );
};

export default  React.memo(App)