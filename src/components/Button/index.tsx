import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ButtonProps {
  title: string;
  selected: boolean;
  onSelect: () => void;
}

export function Button({title, selected, onSelect}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View
        style={{
          ...styles.box,
          backgroundColor: selected ? '#72B6EF' : '#2B2E39',
          borderColor: selected ? '#72B6EF' : '#F3F3F4',
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 16,
  },
  box: {
    width: 30,
    height: 30,

    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#F3F3F4',

    marginRight: 20,
  },
  title: {
    fontSize: 22,
    color: '#F3F3F4',
    fontWeight: 'bold',
  },
});
