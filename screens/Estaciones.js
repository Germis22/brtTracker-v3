import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {listaEstaciones} from '../components/ListaEstaciones.js';

const Estaciones = () => {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={Styles.map}
        initialRegion={{
          latitude: -17.783722,
          longitude: -63.181204,
          latitudeDelta: 0.025,
          longitudeDelta: 0.0221,
        }}>
        {listaEstaciones.map((item, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(item.latitud),
              longitude: parseFloat(item.longitud),
            }}
            title={item.name}>
            <Icon name="bus-stop" color="darkblue" size={25} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    backgroundColor: '#14213d',
    height: 50,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#14213d',
  },
  map: {
    height: '100%',
  },
  text: {
    paddingTop: 10,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Estaciones;
