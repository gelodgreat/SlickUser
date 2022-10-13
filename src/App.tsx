import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import UserStack from 'navigator/navigator';
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <UserStack />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
