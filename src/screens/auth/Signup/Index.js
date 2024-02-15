import React, { useState } from "react";
import { View } from "react-native"
import AuthHeader from "../../../components/AuthHeader/Index";
import Input from "../../../components/Input/Index";
import { styles } from "./styles";
import Checkbox from "../../../components/Checkbox/Index";

const Signup = () => {
    const [checked, setChecked] = useState(fales)
    return(
        <View style={styles.container}>
            <AuthHeader title="Sign Up"/>
            <Input label="Name" placeholder="John Doe"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="********"/>
                <Checkbox checked={checked} onCheck={setChecked}
        </View>
    )
}
export default Signup