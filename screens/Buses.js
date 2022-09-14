import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ListaBuses2 from '../components/ListaBuses2';
import ListaBuses from '../components/ListaBuses';
import ListaBuses3 from '../components/ListaBuses3';
import {useAuth} from '../context/context';

const Buses = () => {
  const {datos} = useAuth();
  return (
    <View style={Styles.container}>
      <ListaBuses datos={datos} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545E75',
  },
});

export default Buses;
