import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFish, faDroplet, faFaceSmile, faHeart, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { LinearGradient } from 'expo-linear-gradient';

library.add(faFish, faDroplet, faFaceSmile, faHeart, faBoltLightning);

function RainbowProgressBar({ progress, icon, label }) {
  return (
    <View style={styles.progressContainer}>
        <LinearGradient
        colors={['red', 'yellow', 'green']}
        style={styles.gradient}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
    />
        <View style={[styles.mask, { height: `${100 - progress}%` }]} />
            <View style={styles.labelContainer}>
                <FontAwesomeIcon icon={icon} size={20} style={styles.icon} />
                {/* <Text style={styles.label}>{label + ' ' + progress + '%'}</Text> */}
            </View>
    </View>
  );
}

function StatsCircleComponent({ selectedCat }) {
  return (
    <View style={styles.container}>
      <RainbowProgressBar
        progress={selectedCat.hunger}
        icon="fa-fish"
        label="Hunger"
      />
      <RainbowProgressBar
        progress={selectedCat.thirst}
        icon="fa-droplet"
        label="Thirst"
      />
      <RainbowProgressBar
        progress={selectedCat.happiness}
        icon="fa-face-smile"
        label="Mood"
      />
      <RainbowProgressBar
        progress={selectedCat.health}
        icon="fa-heart"
        label="Health"
      />
      <RainbowProgressBar
        progress={selectedCat.energy}
        icon="fa-bolt-lightning"
        label="Energy"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingVertical: 2,
    width: '100%'
  },
  progressBarContainer: {
    // marginVertical: 4
  },
  progressContainer: {
    height: 45,
    width: 45,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: 'black',
    overflow: 'hidden',
    backgroundColor: '#e0e0e0', // background color of the progress bar
    justifyContent: 'center', // center the text vertically
    position: 'relative',
    marginVertical: 4,
  },
  gradient: {
    height: '100%',
    width: '100%',
    position: 'absolute', // make sure the gradient stays at the back
  },
  mask: {
    backgroundColor: '#e0e0e0',
    position: 'absolute',
    width: '100%',
    right: 0,
    top: 0,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute', // place the label container on top of the progress bar
  },
  icon: {
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'black',
  },
});

export default StatsCircleComponent;
