import { StyleSheet } from 'react-native';

import { Platform } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: (screenWidth) => ({
    width: screenWidth - 60,
    height: screenWidth - 60,

  }),
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: '#663399',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});