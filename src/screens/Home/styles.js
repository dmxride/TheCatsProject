import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    height: '100%'
  },
  content: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',

  },
  contentCat: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  catImage: {
    flex: 1,
    backgroundColor: '#e3c8de',
    width: '100%',
    marginTop: 50,
    marginBottom: 20,
    maxWidth: 300,
    aspectRatio: 1,
    borderRadius: 10
  }
});