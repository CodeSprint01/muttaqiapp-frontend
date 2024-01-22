/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import { AudioPlayer } from './src/utils/helper/PlayerServices';

TrackPlayer.registerPlaybackService(() => AudioPlayer);

AppRegistry.registerComponent(appName, () => App);