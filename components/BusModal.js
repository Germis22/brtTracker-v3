import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const BusModal = ({datos}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Pressable onPress={() => setVisible(true)}>
        <Icon name="ellipsis-vertical-sharp" style={Styles.icon} />
      </Pressable>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Datos del Bus" style={Styles.DialogHeader} />
        <DialogContent>
          <Text style={DialogContent}>Bus: {datos.BUS.nomBus}</Text>
          <Text style={DialogContent}>Conductor: {datos.BUS.Conductor}</Text>
          <Text style={DialogContent}>
            Capacidad: {datos.BUS.capacidad} Pasajeros
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
        </DialogActions>
      </Dialog>
    </View>
  );
};

const Styles = StyleSheet.create({
  icon: {
    fontSize: 26,
    width: 26,
    height: 26,
    borderRadius: 18,
    alignSelf: 'center',
  },
  DialogHeader: {
    justifyitems: 'center',
  },
  DialogContent: {
    marginBottom: 10,
  },
  Dialog: {
    backgroundColor: '#545E75',
  },
});

export default BusModal;
