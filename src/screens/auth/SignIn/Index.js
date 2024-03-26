import React from "react";
import { Text, View } from "react-native";
import { styles }  from "/Users/student/Mobiilirakendus/src/screens/auth/Signin/styles.js";
import Button from '../../../components/Button/Index'
import AuthHeader from "../../../components/AuthHeader/Index";
import Input from "../../../components/Input/Index";
import Seperator from "../../../components/Separator/Index";
import GoogleLogin from "../../../components/GoogleLogin/Index";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = ({ navigation }) => {

    const onBack = () => {
        navigation.goBack();
    }

    const onSignUp = () => {
        navigation.navigate('Signup');
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In" />
            <Input placeholder="example@gmail.com" label="Email" />
            <Input placeholder="********" label="Password" isPassword />
            <Button style={styles.button} title="Sign In" />
            <Seperator text="Or sign in with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Don't have an account?
                <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
        </SafeAreaView>    
    );
};

export default Signin;