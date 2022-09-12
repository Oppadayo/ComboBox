import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../components/Button';
import {weekdays} from '../../data';

export function Home() {
  const [selection, setSelection] = useState([]);

  function onHandleSelection(item: {id: number; name: string}) {
    let index = selection.findIndex(i => i.id === item.id);
    let newSelection = [...selection];

    if (index !== -1) {
      newSelection.splice(index, 1);
    } else {
      newSelection.push(item);
    }
    setSelection(newSelection);
  }

  alert(`Days: ${selection.map(item => item.name)}`);

  console.log(selection);

  return (
    <View style={styles.container}>
      {weekdays.map(day => (
        <Button
          key={day.id}
          title={day.name}
          selected={selection.findIndex(i => i.id === day.id) !== -1}
          onSelect={() => onHandleSelection(day)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#2B2E39',

    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 40,
  },
});
