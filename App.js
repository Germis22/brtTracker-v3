import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './tabs/Tabs';
import {AuthProvider} from './context/context';
import {Provider} from '@react-native-material/core';
import Header from './components/Header';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Provider>
          <Header />
          <Tabs />
        </Provider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
