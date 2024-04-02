import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 16,
        color: colors.grey,
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        width: 32,
        height: 32,
    },
    button: {
        paddingVertical: 12,
        marginTop: 16,
    }
});