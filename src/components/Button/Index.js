import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from '/Users/student/Mobiilirakendus/src/components/Button/styles.js'

const Button = ({title, onPress, style}) => {
    const handlePress = () => {
        console.log("button is clicked")
    }
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={handlePress} style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default Button