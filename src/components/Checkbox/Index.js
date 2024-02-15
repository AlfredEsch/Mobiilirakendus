import React from "react";
import { TouchableOpacity } from "react-native";

import { styles } from './styles'

const Checkbox = ({checked, onCheck}) => {
    return(
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            {checked ? (
                <View style={styles.innercontainer}>
                    <Image style={styles.checkIcon} source={require('../../assets/check.png')} />
                </View>
            ) : null }
        </TouchableOpacity>
    )
}
export default Checkbox