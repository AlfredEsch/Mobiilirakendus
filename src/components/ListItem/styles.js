import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 4.00,
        elevation: 4,
        backgroundColor: colors.white,
    },
    title: {
        color: colors.blue,
        fontWeight: 'bold',
        fontSize: 18,
    },
    subtitle: {
        color: colors.black,
        fontSize: 12,
        marginTop: 6,
    },
    arrow: {
        width: 24,
        height: 24,
    },
    content: {
        flex: 1,
    },
})