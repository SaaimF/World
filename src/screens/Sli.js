import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import {useDispatch, useSelector} from 'react-redux';
import { rrequest } from '../store/actions/Nsig';
import Sphe from './Sphe';
import Asphe from './Asphe';
import Osphe from './Osphe';





const Newoffer = ({navigation}) => {
  const [sliderValue, setsliderValue] = useState(0);
  const [datapkg, setdatapkg] = useState(0);
  const [datacalls, setdatacalls] = useState(0);
  const [datasms, setdatasms] = useState(0);
  const [total, settotal] = useState(0);
  const[get,set]=useState(true)

  const dispatch = useDispatch();
  const forus = useSelector(state => state.Fsi.data);

  return (
    <View style={{flex: 1}}>
             <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                  <Text>Hello</Text>
                  {forus.get === true ? <Sphe /> : null}
                {forus.get === true ? <Asphe /> : null}
                {forus.get === true ? <Osphe/> : null}
              </View>
      <View style={{backgroundColor: 'lightgray'}}>
        <Text style={{color: 'black', margin: 10, fontWeight: '700'}}>
          My Custom Bundle
        </Text>
        <Text style={{color: 'black', marginHorizontal: 10, fontWeight: '700'}}>
          Validity: {sliderValue} Days
        </Text>
        <View style={{flexDirection: 'row', margin: 20}}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/9503/9503179.png',
            }}
            style={{
              height: 25,
              width: 25,
              marginTop: 10,
              // marginTop: 10,
              marginRight: 5,
            }}
          />
          <Text style={{marginRight: 10}} numberOfLines={3}>
            {
              'Now you can subcribe to two MYOB bundles with the same validity. During so will cancel your previous subcription. '
            }{' '}
          </Text>
        </View>
      </View>
      <View style={{backgroundColor: 'gray', height: 100, marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Text>{total} </Text>
          <Text style={{color: 'white'}}>Validity </Text>
          <Text style={{color: 'white'}}>{sliderValue} </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.minumum}
            onPress={() => {
              if (sliderValue > 0) {
                // slider valur is less than ha 1 - kr dy
                setsliderValue(sliderValue - 3);
              }
            }}>
            <Text style={styles.minus}>-</Text>
          </TouchableOpacity>

          <Slider
            style={{width: 230, height: 50}}
            minimumValue={1}
            maximumValue={30}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#000000"
            value={sliderValue}
            onValueChange={setsliderValue}
            thumbTintColor="red"
            // width="300"
          />
          {/* <Text>{sliderValue} </Text> */}
          <TouchableOpacity
            style={styles.minumum}
            onPress={() => {
              if (sliderValue < 30) {
                // slider valur is less than ha 1 - kr dy
                setsliderValue(sliderValue + 3);
              }
            }}>
            <Text style={styles.minus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: 'gray', height: 100, marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Text style={{color: 'white'}}>DATA </Text>
          <Text style={{color: 'white'}}>{datapkg}MB </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.minumum}
            onPress={() => {
              if (datapkg > 0) {
                // slider valur is less than ha 1 - kr dy
                setdatapkg(datapkg - 200);
                settotal(total - 30);
              }
            }}>
            <Text style={styles.minus}>-</Text>
          </TouchableOpacity>

          <Slider
            style={{width: 230, height: 50}}
            minimumValue={0}
            maximumValue={1000}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#000000"
            value={datapkg}
            onValueChange={setdatapkg}
            thumbTintColor="red"
            sliderValue={settotal}

            // width="300"
          />
          {/* <Text>{sliderValue} </Text> */}
          <TouchableOpacity
            style={styles.minumum}
            onPress={() => {
              if (datapkg < 1000) {
                // slider valur is less than ha 1 - kr dy
                setdatapkg(parseInt(datapkg + 200));
                settotal(total + 30);
              }
            }}>
            <Text style={styles.minus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{backgroundColor: 'gray', height: 100, marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Text style={{color: 'white'}}>CALLS </Text>
          <Text style={{color: 'white'}}>{datacalls} Mints </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.minumum}
            onPress={() => {
              if (datacalls > 0) {
                // slider valur is less than ha 1 - kr dy
                setdatacalls(datacalls - 500);
                settotal(total - 45);
              }
            }}>
            <Text style={styles.minus}>-</Text>
          </TouchableOpacity>

          <Slider
            style={{width: 230, height: 50}}
            minimumValue={0}
            maximumValue={5000}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#000000"
            value={datacalls}
            onValueChange={setdatacalls}
            thumbTintColor="red"
            // width="300"
          />
          {/* <Text>{sliderValue} </Text> */}
          <TouchableOpacity
            style={styles.minumum}
            onPress={() => {
              if (datacalls < 5000) {
                // slider valur is less than ha 1 - kr dy
                setdatacalls(parseInt(datacalls + 500));
                settotal(total + 45);
              }
            }}>
            <Text style={styles.minus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{backgroundColor: 'gray', height: 100, marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Text style={{color: 'white'}}> SMS </Text>
          <Text style={{color: 'white'}}>{datasms} SMS </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.minumum}
            onPress={() => {
              if (datasms > 0) {
                // slider valur is less than ha 1 - kr dy
                setdatasms(datasms - 100);
                settotal(total - 20);
              }
            }}>
            <Text style={styles.minus}>-</Text>
          </TouchableOpacity>

          <Slider
            style={{width: 230, height: 50}}
            minimumValue={0}
            maximumValue={2000}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#000000"
            value={datasms}
            onValueChange={setdatasms}
            thumbTintColor="red"
            // width="300"
          />
          {/* <Text>{sliderValue} </Text> */}
          <TouchableOpacity
            style={styles.minumum}
            onPress={() => {
              if (datasms < 2000) {
                // slider valur is less than ha 1 - kr dy
                setdatasms(parseInt(datasms + 100));
                settotal(total + 20);
              }
            }}>
            <Text style={styles.minus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          let payload = [
            {
              dita: datapkg,
              valid: sliderValue,
              cals: datacalls,
              smss: datasms,
              totall: total,
              get
            },
          ];
          dispatch(rrequest(payload));
          navigation.navigate('Home');
        }}
        style={{
          alignSelf: 'center',
          height: 40,
          width: 300,
          backgroundColor: 'brown',
          position: 'absolute',
          bottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Subscribe </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Newoffer;

const styles = StyleSheet.create({
  minumum: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    backgroundColor: 'red',
    borderRadius: 100,
    margin: 10,
    // marginTop: 15,
  },
  minus: {
    color: 'white',
    fontWeight: '900',
    fontSize: 16,
  },
});