import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

const EditableBox = ({label, value, onChangeText, placeholder}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={styles.input} />
        </View>
    )
}

export default EditableBox;