import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserData} from '../store/apicall';

const Ho = ({navigation}) => {
  const [getemail, setemail] = useState(null);
  const [getid, setid] = useState(null);
  const dispatch = useDispatch();
  const getSingninData = useSelector(state => state.Signr.data);
  // const gtd = useSelector(state => state.Addi?.data.username.get1);
  useEffect(() => {
    getUserData(dispatch, 'https://api.github.com/users');
  }, []);

  const OnSubmit = () => {
    getSingninData.map(item => {
      {
        getemail === item.login && getid === item.node_id
          ? navigation.navigate('Home', {username: item.login})
          : null;
      }
    });
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        style={{
          height: 40,
          width: '80%',
          borderWidth: 2,
          color: '#000',
          margin: 30,
          padding: 5,
        }}
        placeholder="Email"
        placeholderTextColor={'#000'}
        onChangeText={setemail}
      />

      <TextInput
        style={{
          height: 40,
          width: '80%',
          borderWidth: 2,
          color: '#000',
          margin: 30,
          padding: 5,
        }}
        placeholder="Id"
        placeholderTextColor={'#000'}
        onChangeText={setid}
      />

      <TouchableOpacity
        onPress={OnSubmit}
        style={{
          height: 40,
          width: '80%',
          borderWidth: 2,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 30,
        }}>
        <Text style={{fontSize: 25, color: '#fff'}}>Signin & Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Ho;
