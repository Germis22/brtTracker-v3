import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({title, height, fontSize}) => {
  return (
    <View style={[styles.header, {height: height}]}>
      <Text style={[styles.text, {fontSize: fontSize}]}> {title} </Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'BRT Tracker',
  height: 60,
  fontSize: 23,
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#14213d',
    borderTopWidth: 0,
    borderColor: 'white',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textShadowRadius: 7,
    textShadowColor: '#3a86ff',
  },
});

export default Header;
