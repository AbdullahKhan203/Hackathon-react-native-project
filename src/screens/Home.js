import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header
        title={'DoctorApp'}
        icon={require('../assets/images/left-arrow.png')}
      />
      <Image
        source={require('../assets/images/banner.jpeg')}
        style={styles.banner}
      />
      <Text style={styles.heading}>Select Catagoryy</Text>
      <View style={{marginTop:20}}>
        <FlatList
          data={[1, 1, 1, 1, 1, 1]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                <LinearGradient
                  colors={['#20A4F3', '#192f6a']}
                  style={styles.linearGradient}>
                  <Text style={styles.catName}>{'Catagory '+index +1}</Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text >Select Catagory</Text>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 15,
  },
  linearGradient: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent:'center',
    alignItems:'center',
  },
//   catName:{
//     color:'#fff',
//     // fontSize:'18',
//     // fontWeight:'bold',
//   }

});
