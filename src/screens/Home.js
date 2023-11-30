import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ImageBackground,
  FlatList,
  Animated,
} from 'react-native';
import {set} from 'react-native-reanimated';
import {P, dashboard, just, just1} from '../../Dum';
import Cir from './Circle';
import {useSelector} from 'react-redux';
import Cir1 from './Cir';
import Cir2 from './C';
import Sphe from './Sphe';
import Asphe from './Asphe';
import Osphe from './Osphe';

const Home = ({navigation, route}) => {
  // const getSingninData = useSelector(state => state.Signr.data);
  const select = useSelector(state => state.Signr.data);

  const Idk = ({item}) => {
    return (
      <View>
        <Image style={{height: 100, width: width}} source={{uri: item.pic}} />
      </View>
    );
  };
  const Idk1 = ({item}) => {
    return (
      <View>
        <Image style={{height: 180, width: width}} source={{uri: item.im}} />
      </View>
    );
  };
  class MyAnimatedScrollView extends React.Component {
    constructor(props) {
      super(props);
      this.scrollY = new Animated.Value(0);
    }

    render() {
      const translateYHeader = this.scrollY.interpolate({
        inputRange: [0, 100], // Define the scroll range for the header animation
        outputRange: [10, -20], // Define translateY values for the header component
        extrapolate: 'clamp', // Keep values within the specified range
      });

      const translateXUsername = this.scrollY.interpolate({
        inputRange: [0, 100], // Define the scroll range for the username translation
        outputRange: [0, -width], // Move the username to the left when "RS 200" is invisible
        extrapolate: 'clamp', // Keep values within the specified range
      });
      const translateXUsername1 = this.scrollY.interpolate({
        inputRange: [0, 100], // Define the scroll range for the username translation
        outputRange: [0, -width / 2.8], // Move the username to the left when "RS 200" is invisible
        extrapolate: 'clamp', // Keep values within the specified range
      });

      const translateXRecharge = this.scrollY.interpolate({
        inputRange: [0, 100], // Define the scroll range for the recharge translation
        outputRange: [0, width / 4], // Move "Tap to Recharge" to the right when "RS 200" is invisible
        extrapolate: 'clamp', // Keep values within the specified range
      });
      const translateXRecharge1 = this.scrollY.interpolate({
        inputRange: [0, 100], // Define the scroll range for the recharge translation
        outputRange: [0, width / -6], // Move "Tap to Recharge" to the right when "RS 200" is invisible
        extrapolate: 'clamp', // Keep values within the specified range
      });

      return (
        <View>
          <ScrollView
            scrollEventThrottle={40}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {contentOffset: {y: this.scrollY}},
                },
              ],
              {useNativeDriver: false}, // Ensure useNativeDriver is set to false for translateY animations
            )}>
            {/* Your scrollable content */}

            <View style={{marginTop: 180}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginVertical: 10,
                }}>
                <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
                  Remaining Usage
                </Text>
                <Text
                  style={{
                    color: '#C11B17',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  Usage Details
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                {select.get === true ? <Cir /> : null}
                {select.get === true ? <Cir1 /> : null}
                {select.get === true ? <Cir2 /> : null}
              </View>
              {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                  <Text>Hello</Text>
                {forus.get === true ? <Sphe /> : null}
                {forus.get === true ? <Asphe /> : null}
                {forus.get === true ? <Osphe/> : null}
              </View> */}
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginVertical: 30,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Paka');
                }}
                style={{
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  borderLeftWidth: 1,
                  borderTopWidth: 1,
                  padding: 10,
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1007/1007988.png',
                  }}
                />
                <Text>Pakages</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Sli');
                }}
                style={{
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  padding: 10,
                  alignItems: 'center',
                  borderTopWidth: 1,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1007/1007988.png',
                  }}
                />
                <Text>Bundlesi</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  padding: 10,
                  alignItems: 'center',
                  borderTopWidth: 1,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1007/1007988.png',
                  }}
                />
                <Text>Pakages</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  borderRightWidth: 1,

                  padding: 10,
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1007/1007988.png',
                  }}
                />
                <Text>Pakages</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  borderLeftWidth: 1,
                  padding: 10,
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1007/1007988.png',
                  }}
                />
                <Text>Pakages</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  padding: 10,
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1007/1007988.png',
                  }}
                />
                <Text>Pakages</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  padding: 10,
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1007/1007988.png',
                  }}
                />
                <Text>Pakages</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  padding: 10,
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={{
                    uri: 'https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Photo.png',
                  }}
                />
                <Text>Account </Text>
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor: '#8e8e8e', height: 10}}></View>
            <FlatList
              style={{marginVertical: 10}}
              horizontal
              data={just}
              renderItem={Idk}
            />
            <FlatList
              style={{marginVertical: 10}}
              horizontal
              data={just1}
              renderItem={Idk1}
            />
            <FlatList
              style={{marginVertical: 10}}
              horizontal
              data={just}
              renderItem={Idk}
            />
            <FlatList
              style={{marginVertical: 10}}
              horizontal
              data={just1}
              renderItem={Idk1}
            />
            <FlatList
              style={{marginVertical: 10}}
              horizontal
              data={just}
              renderItem={Idk}
            />
            <View></View>

            {/* Add more content here */}
          </ScrollView>
          <Animated.View
            style={{transform: [{translateY: translateYHeader}], top: -810}}>
            <View
              style={{
                marginVertical: 10,

                height: height / 5.5,
                width: width,
                backgroundColor: '#1E001C',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 100, // Adjust as needed
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: 5,
                  alignItems: 'center',
                }}>
                <Animated.View
                  style={[
                    {
                      marginTop: 40,
                    },
                    {transform: [{translateX: translateXUsername}]}, // Apply translateX to the username
                  ]}>
                  <Text style={{color: '#fff'}}>Your balance is</Text>
                  <Animated.View
                    style={[
                      {
                        flexDirection: 'row',
                        alignItems: 'baseline',
                      },
                      {transform: [{translateX: translateXUsername}]}, // Apply translateX to the username
                    ]}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      RS
                    </Text>
                    <FlatList
                      data={P}
                      renderItem={({item, index}) => {
                        return (
                          <Text
                            style={{
                              fontSize: 45,
                              fontWeight: 'bold',
                              color: '#fff',
                            }}>
                            {select.get === true
                              ? item.pri - select.price
                              : item.pri}
                          </Text>
                        );
                      }}
                    />
                  </Animated.View>
                </Animated.View>
                <Animated.View
                  style={[
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                    },
                    {transform: [{translateX: translateXUsername1}]}, // Apply translateX to "Tap to Recharge"
                  ]}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{
                        height: height / 18,
                        tintColor: '#8e8e8e',
                        width: width / 9,
                        marginHorizontal: 5,
                      }}
                      source={{
                        uri: 'https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Photo.png',
                      }}
                    />
                    <View>
                      <Text style={{color: '#fff', fontSize: 20}}>SaaimF</Text>
                      <Text style={{color: '#fff', fontSize: 20}}>
                        03252125935
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              </View>
              <Animated.View
                style={{
                  transform: [
                    {translateX: translateXRecharge},
                    {translateY: translateXRecharge1},
                  ],
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#C11B17',
                    alignItems: 'center',
                    padding: 5,
                    borderRadius: 10,
                    marginHorizontal: '8%',
                    top: -8,
                  }}>
                  <Text style={{color: '#fff', fontSize: 20}}>
                    Tap to Recharge
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </Animated.View>
        </View>
      );
    }
  }
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const {height, width} = Dimensions.get('window');

  const CustomModal = ({visible, onClose}) => {
    const {width, height} = Dimensions.get('window');
    return (
      <Modal animationType="fade" transparent visible={modalVisible}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1}}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              width: '75%',
              alignSelf: 'flex-end',
            }}>
            <ImageBackground
              source={{
                uri: 'https://png.pngtree.com/thumb_back/fh260/background/20201203/pngtree-red-halftone-polka-dot-background-image_501166.jpg',
              }}
              style={{height: 170, width: '100%'}}>
              <Image
                source={{
                  uri: 'https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Photo.png',
                }}
                style={{
                  height: 55,
                  width: 55,
                  tintColor: '#8e8e8er',
                  borderRadius: 100,
                  margin: 15,
                }}
              />
              <Text
                style={{
                  color: 'white',
                  marginLeft: 15,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                SaaimF
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 15,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Yes
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 15,
                  marginTop: 10,
                  fontSize: 20,
                  fontWeight: '900',
                }}>
                dontKnow
              </Text>
            </ImageBackground>
            <FlatList
              data={dashboard}
              renderItem={({item}) => {
                return (
                  <View>
                    <View style={{flexDirection: 'row', margin: 20}}>
                      {/* <Image
                        source={{uri: item.iamge}}
                        style={{height: 30, width: 30, tintColor: 'gray'}}
                      /> */}
                      <Text style={{fontSize: 20, color: 'black', left: 10}}>
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 1,
                        width: '100%',
                        backgroundColor: 'lightgray',
                      }}></View>
                  </View>
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: '#C11B17',
            height: height / 15,

            width: width,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <Image
              style={{
                height: height / 26,
                width: width / 10,
                tintColor: '#FFF',
              }}
              source={{
                uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                height: height / 26,
                width: width / 10,
                tintColor: '#FFF',
              }}
              source={{
                uri: 'https://icons.veryicon.com/png/o/leisure/crisp-app-icon-library-v3/gift-83.png',
              }}
            />
          </TouchableOpacity>

          <Text style={{color: '#fff', fontSize: 25}}>Jazz World</Text>

          <TouchableOpacity>
            <Image
              style={{
                height: height / 26,
                width: width / 13,
                tintColor: '#FFF',
              }}
              source={{
                uri: 'https://cdn0.iconfinder.com/data/icons/glyphpack/41/refresh-512.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                height: height / 25,
                width: width / 13,
                tintColor: '#FFF',
              }}
              source={{
                uri: 'https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openModal}>
            <Image
              style={{
                height: height / 26,
                width: width / 10,
                tintColor: '#FFF',
              }}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/5036/5036960.png',
              }}
            />
          </TouchableOpacity>
          <CustomModal visible={modalVisible} onClose={closeModal} />
        </View>
        <View>
          <MyAnimatedScrollView />
        </View>
        {/* <View
            style={{
              margin: 10,
              flex: 3,
              height: height / 5.5,
              width: width / 1.07,
              backgroundColor: '#1E001C',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <View>
                <Text style={{color: '#fff'}}>Your balance is</Text>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                  <Text
                    style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
                    RS
                  </Text>
                  <Text
                    style={{fontSize: 45, fontWeight: 'bold', color: '#fff'}}>
                    200
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{
                    height: height / 18,
                    tintColor: '#8e8e8e',
                    width: width / 9,
                    marginHorizontal: 5,
                  }}
                  source={{
                    uri: 'https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Photo.png',
                  }}
                />
                <View>
                  <Text style={{color: '#fff', fontSize: 20}}>Username</Text>
                  <Text style={{color: '#fff', fontSize: 20}}>03252125935</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#C11B17',
                alignItems: 'center',
                padding: 5,
                borderRadius: 10,
                marginHorizontal: '8%',
                marginTop: '5%',
              }}>
              <Text style={{color: '#fff', fontSize: 20}}>Tap to Recharge</Text>
            </TouchableOpacity>
          </View> */}
      </View>
    </View>
  );
};

export default Home;
