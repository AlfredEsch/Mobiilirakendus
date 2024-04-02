import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        color: colors.black,
    },
    email: {
        fontSize: 16,
        color: colors.grey,
        marginBottom: 14,
    },
    content: {
        flex: 1,
    },
});