import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import Styles from './styles';

export default function ({ navigation }) {
  const [cats, setCats] = React.useState([]);
  const carouselRef = React.useRef(null);
  const { width: screenWidth } = Dimensions.get('window');

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      getFavorite();

    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    getFavorite();
  }, []);

  const getFavorite = async (addCat) => {
    try {
      let cats = JSON.parse(await AsyncStorage.getItem('cats'));
      setCats(cats.items);
    } catch (e) {
      // saving error
      alert("Get Error");
    }
  };
  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={Styles.item(screenWidth)}>
        <ParallaxImage
          source={{ uri: item.url }}
          containerStyle={Styles.imageContainer}
          style={Styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={Styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={cats}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
}
