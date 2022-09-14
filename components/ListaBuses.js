import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ListItem, Text} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListaBuses = () => {
  const buses = [
    {
      nomBus: 'Bus N1',
      iconColor: '#545E75',
      capacidad: 50,
      conductor: 'Julio Jaramillo',
      totalPer: 36,
    },
    {
      nomBus: 'Bus N2',
      iconColor: '#63ADF2',
      capacidad: 50,
      conductor: 'Lionel Messi',
      totalPer: 46,
    },
    {
      nomBus: 'Bus N3',
      iconColor: '#E64848',
      capacidad: 50,
      conductor: 'Francesco Totti',
      totalPer: 50,
    },
    {
      nomBus: 'Bus N4',
      iconColor: '#304D6D',
      capacidad: 50,
      conductor: 'Carlos Tevez',
      totalPer: 15,
    },
  ];

  if (buses.totalPer >= buses.capacidad) {
    return (
      <View>
        {buses.map((item, index) => (
          <ListItem bottomDivider containerStyle={Styles.listItem} key={index}>
            <Icon name="bus" color={item.iconColor} style={Styles.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.nomBus}</ListItem.Title>
              <ListItem.Subtitle style={Styles.textoRojo}>
                Asientos disponibles: {item.capacidad - item.totalPer}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    );
  } else if (buses.totalPer < buses.capacidad && buses.totalPer > 40) {
    return (
      <View>
        {buses.map((item, index) => (
          <ListItem bottomDivider containerStyle={Styles.listItem} key={index}>
            <Icon name="bus" color={item.iconColor} style={Styles.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.nomBus}</ListItem.Title>
              <ListItem.Subtitle style={Styles.textoAmarillo}>
                Asientos disponibles: {item.capacidad - item.totalPer}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    );
  } else {
    return (
      <View>
        {buses.map((item, index) => (
          <ListItem bottomDivider containerStyle={Styles.listItem} key={index}>
            <Icon name="bus" color={item.iconColor} style={Styles.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.nomBus}</ListItem.Title>
              <ListItem.Subtitle style={Styles.textoVerde}>
                Asientos disponibles: {item.capacidad - item.totalPer}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    );
  }
};

const Styles = StyleSheet.create({
  textoVerde: {
    color: '#2B7A0B',
    fontSize: 13,
  },
  textoAmarillo: {
    color: '#FECD70',
    fontSize: 13,
  },
  textoRojo: {
    color: '#E64848',
    fontSize: 13,
  },
  icon: {
    fontSize: 26,
    width: 26,
    height: 26,
    borderRadius: 18,
    alignSelf: 'center',
  },
  listItem: {
    backgroundColor: '#82A0BC',
    height: 60,
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
  },
});

export default ListaBuses;
