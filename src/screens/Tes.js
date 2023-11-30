// import React, {useState, useEffect} from 'react';
// import {View, Text, Animated, StyleSheet, ScrollView} from 'react-native';

// const MainScreen = () => {
//   const [scrollY, setScrollY] = useState(new Animated.Value(0));

//   const StickyHeader = ({headerText}) => {
//     // Calculate the translateY value for the header
//     const translateY = scrollY.interpolate({
//       inputRange: [0, 100], // Adjust as needed
//       outputRange: [0, -100], // Adjust as needed
//       extrapolate: 'identity',
//     });

//     return (
//       <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
//         <Text>{headerText}</Text>
//       </Animated.View>
//     );
//   };

//   const styles = StyleSheet.create({
//     header: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       height: 100, // Adjust as needed
//       backgroundColor: 'lightblue', // Adjust as needed
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//   });

//   // Track the scroll position
//   const handleScroll = Animated.event(
//     [{nativeEvent: {contentOffset: {y: scrollY}}}],
//     {useNativeDriver: false}, // Important for Android
//   );

//   return (
//     <View>
//       <StickyHeader headerText="Sticky Header" />
//       <ScrollView onScroll={handleScroll}>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//         <Text>Hello</Text>
//       </ScrollView>
//     </View>
//   );
// };

// export default MainScreen;
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

const Tes = () => {
  class MyAnimatedScrollView extends React.Component {
    constructor(props) {
      super(props);
      this.scrollY = new Animated.Value(0);
    }

    render() {
      const translateYHeader = this.scrollY.interpolate({
        inputRange: [0, 100], // Define the scroll range for the header animation
        outputRange: [60, 0], // Define translateY values for the header component
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
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
            </View>
            {/* Add more content here */}
          </ScrollView>
          <Animated.View
            style={{transform: [{translateY: translateYHeader}], top: -700}}>
            <View
              style={{
                flex: 3,
                height: height / 5.5,
                width: width,
                backgroundColor: '#1E001C',
                position: 'absolute',

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
                    <Text
                      style={{
                        fontSize: 45,
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      200
                    </Text>
                  </Animated.View>
                </Animated.View>
                3
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
                      <Text style={{color: '#fff', fontSize: 20}}>
                        Username
                      </Text>
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
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
            </View>
            {/* Add more content here */}
          </ScrollView>
        </View>
      );
    }
  }

  return (
    <View style={{flex: 1}}>
      <MyAnimatedScrollView />
    </View>
  );
};

export default Tes;
