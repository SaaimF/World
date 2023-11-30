import React from 'react';
import {View, Dimensions, TouchableOpacity, Text, Image} from 'react-native';

const Notitification = ({navigation}) => {
  const {height, width} = Dimensions.get('window');
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#C11B17',
          height: height / 15,

          width: width,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            style={{
              height: height / 26,
              width: width / 10,
              tintColor: '#FFF',
              marginHorizontal: 20,
            }}
            source={{
              uri: 'https://icons.veryicon.com/png/o/miscellaneous/eva-icon-fill/arrow-back-8.png',
            }}
          />
        </TouchableOpacity>

        <Text style={{marginRight: 100, color: '#fff', fontSize: 25}}>
          Notifications
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 280,
        }}>
        <Text style={{color: '#000', fontSize: 30, textAlign: 'center'}}>
          Sorry you don't have any Notifications
        </Text>
      </View>
    </View>
  );
};

export default Notitification;
