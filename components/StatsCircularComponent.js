import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFish, faDroplet, faFaceSmile, faHeart, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { LinearGradient } from 'expo-linear-gradient';

library.add(faFish, faDroplet, faFaceSmile, faHeart, faBoltLightning);

function StatsComponent(props) {
    return (
        <View style={styles.container}>
            <View style={styles.stat}>
                <LinearGradient colors={['#00FF38', '#004313']} style={styles.statLinearGrad}>
                    <FontAwesomeIcon icon="fa-fish" size={25} />
                </LinearGradient>
            </View>
            <View style={styles.stat}>
                <LinearGradient colors={['#00FF38', '#004313']} style={styles.statLinearGrad}>
                    <FontAwesomeIcon icon="fa-droplet" size={25} color={'black'} />
                </LinearGradient>
            </View>
            <View style={styles.stat}>
                <LinearGradient colors={['#00FF38', '#004313']} style={styles.statLinearGrad}>
                    <FontAwesomeIcon icon="fa-face-smile" size={25} color={'black'} />
                </LinearGradient>
            </View>
            <View style={styles.stat}>
                <LinearGradient colors={['#00FF38', '#004313']} style={styles.statLinearGrad}>
                    <FontAwesomeIcon icon="fa-heart" size={25} color={'black'} />
                </LinearGradient>
            </View>
            <View style={styles.stat}>
                <LinearGradient colors={['#00FF38', '#004313']} style={styles.statLinearGrad}>
                    <FontAwesomeIcon icon="fa-bolt-lightning" size={25} color={'black'} />
                </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 70,
        width: '100%'
    },
    statLinearGrad: {
        padding: 15,
    },
    stat: {
        borderWidth: 3,
        borderColor: 'black',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        margin: 5,
        alignItems: 'center',
        overflow: 'hidden',
    }
  });

export default StatsComponent;
