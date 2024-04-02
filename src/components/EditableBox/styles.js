import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: colors.white,
        borderRadius: 4,
        marginVertical: 12,
    },
    label: {
        fontSize: 12,
        color: colors.grey,
        marginBottom: 8,
    },
    input: {
        fontSize: 14,
        color: colors.blue,
        fontWeight: '500',
    },
});