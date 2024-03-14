import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import {COLORS, fonts} from '../../../styles/color';

interface InfoProps {
  userName: string;
  email: string;
  didOpenProfile: () => void;
  userImage: any;
}

const UserInfoCard: FC<InfoProps> = ({
  userName,
  email,
  didOpenProfile,
  userImage,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.profile}>
          <Image source={userImage} style={styles.profileImg} />
        </View>
        <View style={styles.userIno}>
          <AppText text={userName} style={styles.userName} />
          <AppText text={email} style={styles.emailTxt} />
        </View>
        <View style={styles.profileIcon}>
          <TouchableOpacity
            onPress={didOpenProfile}
            activeOpacity={0.5}
            style={styles.circleIcon}>
            <AppIconSvg
              icon={Icons.ArrowRight}
              width={24}
              height={24}
              color={COLORS.green}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserInfoCard;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  userContainer: {
    width: '92%',
    paddingVertical: 40,
    backgroundColor: COLORS.light_Powder_Blue,
    borderRadius: 38,
    flexDirection: 'row',
    elevation: 7,
  },
  profile: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    width: 56,
    height: 56,
  },
  userIno: {
    width: '55%',
    justifyContent: 'center',
  },
  userName: {
    fontFamily: fonts.dmSans[500],
    fontSize: 18,
    color: COLORS.dark_gray,
  },
  emailTxt: {
    fontSize: 14,
    fontFamily: fonts.dmSans[400],
    color: COLORS.medium_gray,
  },
  profileIcon: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.pale_mint,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.4,
        shadowRadius: 7,
      },
    }),
  },
});
