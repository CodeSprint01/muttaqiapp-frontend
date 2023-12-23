import {StyleSheet} from 'react-native';
import notifee from '@notifee/react-native';
import {useEffect} from 'react';

const Notification = () => {
  useEffect(() => {
    displayNotification();
  }, []);

  const setupChannels = async () => {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      sound: 'alarm',
    });

    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      sound: 'alarm',
      ios: {
        categoryId: 'default',
        actions: [
          {
            title: 'iOS Button 1',
            identifier: 'iOSButton1',
          },
          {
            title: 'iOS Button 2',
            identifier: 'iOSButton2',
          },
        ],
      },
    });
  };

  const displayNotification = async () => {
    await setupChannels();

    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      subtitle: 'Subtitle',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
        actions: [
          {
            title: 'Android Button 1',
            pressAction: {
              id: 'androidButton1',
            },
          },
          {
            title: 'Android Button 2',
            pressAction: {
              id: 'androidButton2',
            },
          },
        ],
      },
      ios: {
        categoryId: 'default',
      },
    });
  };

  return null;
};

export default Notification;

const styles = StyleSheet.create({});
