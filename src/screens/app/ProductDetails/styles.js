import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  image: {
    width: '100%',
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    fontWeight: "300",
    color: colors.textGrey,
    marginVertical: 8,
  },
  footer: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 75,
  },
  save: {
    flex: 1,
  },
  bookmarkContainer: {
    backgroundColor: colors.lightGrey,
    padding: 18,
    borderRadius: 8,
    marginRight: 16,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
  },
  backContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    borderRadius: 8,
    margin: 24,
    padding: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
});