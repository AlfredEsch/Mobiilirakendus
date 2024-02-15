import React from "react";
import {SafeAreaView} from "react-native"
import Splash from "./src/screens/auth/Splash/Index";
import Signup from "./src/screens/auth/Signup/Index";

const App = () => {
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App