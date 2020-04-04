import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Styles from './styles';

export default function ({ onPress, title }) {
  return (
    <TouchableOpacity style={Styles.button} onPress={() => onPress && onPress()}>
      <Text style={Styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}