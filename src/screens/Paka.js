import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native';
import {Card} from '../../Dum';
import {useDispatch} from 'react-redux';
import {success} from '../store/actions/Signa';

const Paka = ({navigation}) => {
  const dispatch = useDispatch();
  const {height, width} = Dimensions.get('window');
  const [get, set] = useState(true);

  return (
    // <View>
    //   <View style={{margin: 20, borderWidth: 1, padding: 10}}>
    //     <Text style={{fontSize: 20}}>Weekly Voice</Text>
    //     <Text>Validity:7.0DAY</Text>
    //     <View
    //       style={{
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         justifyContent: 'space-between',
    //         marginVertical: 20,
    //       }}>
    //       <View>
    //         <Text style={{fontSize: 20}}>1000</Text>
    //         <Text>jazzMins</Text>
    //       </View>
    //       <View>
    //         <Text style={{fontSize: 30, color: 'orange'}}>139rs</Text>
    //       </View>
    //     </View>
    //     <TouchableOpacity
    //       style={{
    //         backgroundColor: 'red',
    //         alignItems: 'center',
    //         padding: 5,
    //         borderWidth: 2,
    //         borderRadius: 10,
    //       }}>
    //       <Text style={{fontSize: 20, color: '#ffff'}}>SUBSCRIBE</Text>
    //     </TouchableOpacity>
    //   </View>
    <FlatList
      data={Card}
      renderItem={({item}) => {
        return (
          <View style={{margin: 20, borderWidth: 1, padding: 10}}>
            <Text style={{fontSize: 20}}>Weekly Voice</Text>
            <Text>Validity:7.0DAY</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 20,
              }}>
              <View>
                <Text style={{fontSize: 20}}>{item.min}</Text>
                <Text>internet</Text>
              </View>
              <View>
                <Text style={{fontSize: 20}}>{item.min}</Text>
                <Text>jazzMins</Text>
              </View>
              <View>
                <Text style={{fontSize: 20}}>{item.min}</Text>
                <Text>SMS</Text>
              </View>
              <View>
                <Text style={{fontSize: 30, color: 'orange'}}>
                  {item.price}rs
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
                set(get);
                let payload = {
                  min: item.min,
                  price: item.price,
                  get,
                };

                dispatch(success(payload));
              }}
              style={{
                backgroundColor: 'red',
                alignItems: 'center',
                padding: 5,
                borderWidth: 2,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 20, color: '#ffff'}}>SUBSCRIBE</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
    // </View>
  );
};

export default Paka;
