import {View, Text} from 'react-native';
import React from 'react';

const ListaBuses3 = () => {
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
      iconColor: '#545E75',
      capacidad: 50,
      conductor: 'Messi',
      totalPer: 46,
    },
    {
      nomBus: 'Bus N3',
      iconColor: '#545E75',
      capacidad: 50,
      conductor: 'Totti',
      totalPer: 50,
    },
  ];

  buses.map(item => {
    if (item.capacidad > item.totalPer) {
      return (
        <View>
          <Text>{item.nomBus}</Text>
          <Text>{item.conductor}</Text>
          <Text>Asientos disponibles</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>{item.nomBus}</Text>
          <Text>{item.conductor}</Text>
          <Text>No hay asientos disponibles</Text>
        </View>
      );
    }
  });
};

export default ListaBuses3;
