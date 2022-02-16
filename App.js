import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import AppContainer from './src/navigations';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
        <StatusBar style="auto" />
        <AppContainer />
    </Provider>
  );
}