/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SwitchNavigator from './js/navigator/Navigator';
AppRegistry.registerComponent(appName, () => SwitchNavigator);
