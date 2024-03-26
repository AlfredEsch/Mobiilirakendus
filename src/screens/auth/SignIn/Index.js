import React from "react";
import { Text, View } from "react-native";
import { styles } from './styles/'
import Button from '../../../components/Button/Index'
import AuthHeader from "../../../components/AuthHeader/Index";
import Input from "../../../components/Input/Index";
import Seperator from "../../../components/Separator/Index";
import GoogleLogin from "../../../components/GoogleLogin/Index";

const Signin = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In" />
            <Input placeholder="example@gmail.com" label="Email" />
            <Input placeholder="********" label="Password" isPassword />
            <Button style={styles.button} title="Sign In" />
            <Seperator text="Or sign in with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Don't have an account?
                <Text style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
    );
};

export default Signin;