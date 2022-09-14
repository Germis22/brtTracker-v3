import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ListItem, Text} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BusModal from './BusModal';

const ListaBuses2 = ({datos}) => {
  if (datos.PASAJEROS.totalPer >= datos.BUS.capacidad) {
    // asiento no disponible
    // color rojo
    return (
      <View>
        <ListItem bottomDivider containerStyle={Styles.listItem}>
          <Icon name="bus" color={datos.BUS.iconColor} style={Styles.icon} />
          <ListItem.Content>
            <ListItem.Title>{datos.BUS.nomBus}</ListItem.Title>
            <ListItem.Subtitle style={Styles.textoRojo}>
              Asientos no disponibles
            </ListItem.Subtitle>
          </ListItem.Content>
          <BusModal datos={datos} />
        </ListItem>
      </View>
    );
  } else if (
    datos.PASAJEROS.totalPer < datos.BUS.capacidad &&
    datos.PASAJEROS.totalPer > 40
  ) {
    // asiento disponible y cantidad de asientos
    // color amarillo
    let asiento = datos.BUS.capacidad - datos.PASAJEROS.totalPer;
    let info = 'Asientos disponibles: ' + asiento;

    return (
      <View>
        <ListItem bottomDivider containerStyle={Styles.listItem}>
          <Icon name="bus" color={datos.BUS.iconColor} style={Styles.icon} />
          <ListItem.Content>
            <ListItem.Title>{datos.BUS.nomBus}</ListItem.Title>
            <ListItem.Subtitle style={Styles.textoAmarillo}>
              {info}
            </ListItem.Subtitle>
          </ListItem.Content>
          <BusModal datos={datos} />
        </ListItem>
      </View>
    );
  } else {
    // asiento disponible y cantidad de asientos
    // color verde
    let asiento = datos.BUS.capacidad - datos.PASAJEROS.totalPer;
    let info = 'Asientos disponibles: ' + asiento;
    return (
      <View>
        <ListItem bottomDivider containerStyle={Styles.listItem}>
          <Icon name="bus" color={datos.BUS.iconColor} style={Styles.icon} />
          <ListItem.Content>
            <ListItem.Title>{datos.BUS.nomBus}</ListItem.Title>
            <ListItem.Subtitle style={Styles.textoVerde}>
              {info}
            </ListItem.Subtitle>
          </ListItem.Content>
          <BusModal datos={datos} />
        </ListItem>
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

export default ListaBuses2;
