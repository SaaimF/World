/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Route from './src/routes';
import {persistor, store} from './src/store';
import {Circle} from 'react-native-svg';
import CircularProgressBar from './src/screens/Circle';
import Cir from './src/screens/Circle';
import LoginScreen from './src/screens/Tes';
import AuthenticationScreen from './src/screens/Tes';
import MainScreen from './src/screens/Tes';
import Tes from './src/screens/Tes';
import MyAnimatedView from './src/screens/Tes';
import Sli from './src/screens/Sli';

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
