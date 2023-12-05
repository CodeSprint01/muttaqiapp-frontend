import {LogBox} from 'react-native';

if (__DEV__) {
  const ignoreWarns = ['ViewPropTypes will be removed from React Native'];
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
    'Sending `onAnimatedValueUpdate` with no listeners registered',
    'SerializableStateInvariantMiddleware',
    'Cannot update a component',
  ]);
  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };
  LogBox.ignoreLogs(ignoreWarns);
}
export default LogBox;
