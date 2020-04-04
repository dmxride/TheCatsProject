import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    height: '100%',
    alignItems: 'center'
  },
  content: {
    height: '100%',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  contentCat: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    height: '100%',
    alignContent: 'center'
  },
  catImage: {
    flex: 1,
    width: '100%',
    maxWidth: 300,
    aspectRatio: 1,
    borderRadius: 10
  }
});