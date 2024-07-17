import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFish, faDroplet, faFaceSmile, faHeart, faBoltLightning } from '@fortawesome/free-solid-svg-icons';

const { width } = Dimensions.get('window');

// Define the gradient colors based on the stat value
const getGradientColors = (value) => {
  const maxValue = 100;
  const percentage = value / maxValue;

  if (percentage <= 0.33) {
    // Low values: Dark red to slightly less dark red
    const redValue = Math.round(255 * (1 - percentage * 3));
    return [
      `rgb(${redValue}, 0, 0)`, // Darker red
      `rgb(${Math.round(redValue * 0.8)}, 0, 0)` // Slightly lighter red
    ];
  } else if (percentage <= 0.66) {
    // Middle values: Dark orange to slightly lighter orange
    const orangeValue = Math.round(255 * ((percentage - 0.33) * 3));
    return [
      `rgb(${orangeValue}, ${Math.round(orangeValue * 0.5)}, 0)`, // Dark orange
      `rgb(${Math.round(orangeValue * 1.2)}, ${Math.round(orangeValue * 0.6)}, 0)` // Slightly lighter orange
    ];
  } else {
    // High values: Dark green to slightly lighter green
    const greenValue = Math.round(255 * ((percentage - 0.66) * 3));
    return [
      `rgb(0, ${greenValue}, 0)`, // Dark green
      `rgb(0, ${Math.round(greenValue * 1.2)}, 0)` // Slightly lighter green
    ];
  }
};

// Add icons to library
library.add(faFish, faDroplet, faFaceSmile, faHeart, faBoltLightning);

const StatsCircleComponent = ({ selectedCat }) => {
  const radius = 30; // Adjust radius as needed
  const diameter = radius * 2;

  const icons = {
    hunger: faFish,
    thirst: faDroplet,
    happiness: faFaceSmile,
    health: faHeart,
    energy: faBoltLightning,
  };

  return (
    <View style={styles.container}>
      {['hunger', 'thirst', 'happiness', 'health', 'energy'].map((stat, index) => {
        const value = selectedCat[stat];
        const gradientColors = getGradientColors(value);
        const icon = icons[stat];

        return (
          <View key={index} style={styles.statContainer}>
            {/* <Text style={styles.statTitle}>{stat.charAt(0).toUpperCase() + stat.slice(1)}</Text> */}
            <View style={[styles.circle, { width: diameter, height: diameter }]}>
              <LinearGradient
                colors={gradientColors}
                style={styles.gradient}
              />
              <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={icon} size={radius * 0.5} color="white" />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    padding: 5,
  },
  statContainer: {
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  circle: {
    borderRadius: 50, // Circle effect
    overflow: 'hidden',
    backgroundColor: 'white', // Circle border color
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Needed for icon positioning
  },
  gradient: {
    ...StyleSheet.absoluteFillObject, // Fill the circle
    borderRadius: 50,
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default StatsCircleComponent;
