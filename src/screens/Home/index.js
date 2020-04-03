import * as React from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';

import { getRandomCat } from '../../API';

export default function () {
  const [cat, setCat] = React.useState([]);

  React.useEffect(() => {
    initCat();
  }, []);

  const initCat = async () => {
    try {
      const response = await getRandomCat();
      setCat(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      {cat && (
        <View>
          <Image
            source={{
              uri: cat.url,
            }}
          />
          <TouchableOpacity>
            <Text>Add to favorites</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};