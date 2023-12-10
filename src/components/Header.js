import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const Header = ({title, icon}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backbBtn} underlayColor="#f2f2f2">
        <Image source={icon} style={styles.back} />
      </TouchableOpacity>

      <Text style={[styles.title, {marginLeft:20}]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
    paddingLeft: 20,
  },
  back: {
    height: 24,
    width: 24,
  },
  backbBtn: {
    width: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
