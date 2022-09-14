import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useAuth} from '../context/context';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
import ListaBuses from '../components/ListaBuses';
import ListaBuses2 from '../components/ListaBuses2';

const Home = ({color}) => {
  const {datos, loading} = useAuth();

  const location = {
    latitude: -17.783722,
    longitude: -63.181204,
    latitudeDelta: 0.025,
    longitudeDelta: 0.0221,
  };

  if (loading) {
    return (
      <ActivityIndicator
        style={[Styles.loading, Styles.horizontal]}
        animating={loading}
        size="large"
        color="#6A8EAE"
      />
    );
  }

  return (
    <View style={Styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={Styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: location.latitudeDelta,
          longitudeDelta: location.longitudeDelta,
        }}>
        <Marker
          coordinate={{
            latitude: parseFloat(datos.GPS.Latitud),
            longitude: parseFloat(datos.GPS.Longitud),
          }}
          title={datos.BUS.nomBus}>
          <Icon name="bus" color={color} size={24} />
        </Marker>
      </MapView>
      <Header title={'Lista de Buses'} height={45} fontSize={18} />
      <View showsVerticalScrollIndicator={false}>
        <ListaBuses2 datos={datos} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '60%',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  container: {
    backgroundColor: '#545E75',
    flex: 1,
  },
});

export default Home;
