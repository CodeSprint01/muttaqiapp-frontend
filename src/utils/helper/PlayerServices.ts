import TrackPlayer, {Event} from 'react-native-track-player';

export const AudioPlayer = async function () {
  try {
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.stop());
  } catch (error) {
    console.log('audio player eroor: ', error);
  }
};
