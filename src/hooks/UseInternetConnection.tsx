import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

const UseInternetConnection = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return isConnected;
};

export default UseInternetConnection;
