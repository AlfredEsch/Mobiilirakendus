import React { useEffect } from "react";
import {SafeAreaView} from "react-native"
import Splash from "./src/screens/auth/Splash/Index";
import Signup from "./src/screens/auth/Signup/Index";
import { useEffect } from "react";

const WEB_CLIENT_ID = '740037864403-o4iouiofdugesvsl8a1bjipl3iekvk7o.apps.googleusercontent.com'
const IOS_CLIENT_ID = '740037864403-mggr1o8p7j8ld8ca814jdalhs8n3qvo1.apps.googleusercontent.com'
const REVERSED_CLIENT_ID = 'com.googleusercontent.apps.740037864403-mggr1o8p7j8ld8ca814jdalhs8n3qvo1'

const App = () => {
  useEffect(() => {}, [])
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App