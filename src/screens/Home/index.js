import * as React from 'react';
import { Text, ScrollView, View, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Button from './../../components/Button';

import Styles from './styles';

import { getRandomCat } from '../../API';

export default function () {
  const [cat, setCat] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    initCat();
  }, []);

  const initCat = async () => {
    try {
      setLoading(true);
      const response = await getRandomCat();
      setCat(response[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Get Error");
    }
  };

  const saveFavorite = async (addCat) => {
    try {
      setSaving(true);
      let cats = JSON.parse(await AsyncStorage.getItem('cats'));

      if (cats) {
        cats.items.push(addCat);
      } else {
        cats = { items: [addCat] };
      }

      await AsyncStorage.setItem('cats', JSON.stringify(cats));

      setSaving(false);
      alert("Added to Favorites");

    } catch (e) {
      // saving error
      setSaving(false);
      alert("Saving Error");
    }
  };

  //Note: On Android, the default source prop is ignored on debug builds.
  return (
    <ScrollView style={Styles.wrapper} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={Styles.content}>
        <Button title={'Refresh'} onPress={() => initCat()} />
        <View style={Styles.contentCat}>
          {loading && <ActivityIndicator size="large" color="#663399" />}
          {cat && !loading && (
            <>
              <Image
                //defaultSource={require('../../assets/placholder.png')}
                style={Styles.catImage}
                source={{
                  uri: cat.url,
                }}
              />
              <Button title={'Add to favorites'} onPress={() => saveFavorite(cat)} />
            </>
          )}
        </View>
      </View>

    </ScrollView>
  );
};