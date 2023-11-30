import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {useSelector} from 'react-redux';

const Cir2 = ({item}) => {
  const select = useSelector(state => state.Signr.data);
  const CircularProgressBar = ({radius, strokeWidth, progress, text}) => {
    const [progressValue] = useState(new Animated.Value(0));

    useEffect(() => {
      // Animate the progress bar to the desired value
      Animated.timing(progressValue, {
        toValue: progress,
        duration: 1000, // You can adjust the duration as needed
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, [progress, progressValue]);

    const circumference = 2 * Math.PI * radius;

    const progressStrokeDashoffset = progressValue.interpolate({
      inputRange: [0, 100],
      outputRange: [circumference, 0],
    });

    return (
      <View style={styles.container}>
        <Svg width={radius * 2} height={radius * 2}>
          {/* Transparent circle to make the center invisible */}
          <Circle
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            fill="transparent"
            stroke={'#8e8e8e'}
            strokeWidth={strokeWidth}
          />
          <AnimatedCircle
            fill={'transparent'}
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            stroke="yellow" // Color of the progress bar
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={progressStrokeDashoffset}
          />
        </Svg>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    text: {
      marginTop: '35%', // Adjust the positioning based on radius and strokeWidth
      fontSize: 18,
      position: 'absolute',
    },
  });

  const radius = 100; // Define radius outside the CircularProgressBar component

  return (
    <View style={styles.container}>
      <CircularProgressBar
        radius={50}
        strokeWidth={6}
        progress={select.get === true ? 100 : 0}
        text={select.min}
      />
      <Text>Remaining SMS</Text>
      <Text>SMS</Text>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cir2;
