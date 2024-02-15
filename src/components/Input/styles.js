import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    InputContainer: {
        borderWidth: 1,
        bordercolor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontWeight: '500'
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal:16
    }
})