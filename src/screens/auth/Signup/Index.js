import React, { useState } from "react";
import { View, Text } from "react-native"
import AuthHeader from "../../../components/AuthHeader/Index";
import Input from "../../../components/Input/Index";
import { styles } from "./styles";
import Checkbox from "../../../components/Checkbox/Index";
import Button from "../../../components/Button/Index";
import Separator from "../../../components/Separator/Index";
import GoogleLogin from "../../../components/GoogleLogin/Index";

const Signup = () => {
    const [checked, setChecked] = useState(false)

    return(
    <View style={styles.container}>
        <AuthHeader title="Sign Up"/>
        <Input label="Name" placeholder="John Doe"/>
        <Input label="Email" placeholder="example@gmail.com"/>
        <Input isPassword label="Password" placeholder="********"/>
        <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}> Terms </Text> & <Text style={styles.agreeTextBold}> Privacy </Text> </Text>
        </View>
        <Button style={styles.button} title="Sign In" />
        <Separator text="Or sign up with" />
        <GoogleLogin/>
        <Text style={styles.footerText}>Already have an account?   
                <Text style={styles.footerLink}> Sign In</Text>
            </Text>
    </View>
    )
}
export default Signup