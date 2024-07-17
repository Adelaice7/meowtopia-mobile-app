import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image, 
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import StatsLinearComponent from '../components/StatsLinearComponent';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFish, faDroplet, faFutbol, faSoap } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import PetCareActionModal from '../modals/PetCareActionModal';
import { Dropdown } from 'react-native-element-dropdown';


library.add(faFish, faDroplet, faFutbol, faSoap);

// Sample data for cats
const cats = [
  { id: '1', name: 'Whiskers', hunger: 70, thirst: 40, happiness: 80, health: 90, energy: 60, image: 'https://placekitten.com/200/200' },
  { id: '2', name: 'Mittens', hunger: 50, thirst: 60, happiness: 70, health: 80, energy: 90, image: 'https://placekitten.com/200/200' },
  { id: '3', name: 'Shadow', hunger: 30, thirst: 50, happiness: 60, health: 70, energy: 80, image: 'https://placekitten.com/200/200' },
];

const PetCareScreen = () => {
  const [selectedCat, setSelectedCat] = useState(cats[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [actionType, setActionType] = useState('');
  const [dropdownValue, setDropdownValue] = useState(selectedCat.id);
  
  const scrollViewRef = useRef(null);

  useEffect(() => {
    setSelectedCat(cats[0]);
    setDropdownValue(cats[0].id);
  }, []);


  const handleAction = (action) => {
    setActionType(action);
    setModalVisible(true);
  };

  const performAction = () => {
    // TODO Perform the action (e.g., feeding, watering) here
    setModalVisible(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onDropdownChange = (item) => {
    const selectedCat = cats.find(cat => cat.id === item.value);
    setSelectedCat(selectedCat);
    setDropdownValue(item.value);
    const index = cats.findIndex(cat => cat.id === item.value);
    scrollViewRef.current.scrollTo({ x: index * Dimensions.get('window').width, animated: true }); // Adjust based on page width
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Dropdown for Cats */}
      {cats.length > 1 && (
        <Dropdown
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          data={cats.map(cat => ({ label: cat.name, value: cat.id }))}
          labelField="label"
          valueField="value"
          placeholder="Select a cat"
          value={dropdownValue}
          onChange={onDropdownChange}
        />
      )}

      {/* Horizontal ScrollView for Cats */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.scrollView}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / Dimensions.get('window').width);
          setSelectedCat(cats[index]);
          setDropdownValue(cats[index].id);
        }}
        scrollEventThrottle={16}
      >
        {cats.map((cat) => (
          /* Content of cat */

          <View key={cat.id} style={styles.catScreen}>
            <Text style={styles.catDetailsTitle}>{cat.name}</Text>
            <Image source={{ uri: cat.image }} style={{ width: '100%', height: 250 }} />

            <StatsLinearComponent selectedCat={selectedCat} />
          </View>
        ))}
      </ScrollView>


      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleAction('feed')}>
        <FontAwesomeIcon icon="fa-fish" size={15} color='white' style={styles.actionButtonText}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleAction('water')}>
          <FontAwesomeIcon icon="fa-droplet" size={15} color='white' style={styles.actionButtonText}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleAction('play')}>
        <FontAwesomeIcon icon="fa-futbol" size={15} color='white' style={styles.actionButtonText}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleAction('clean')}>
        <FontAwesomeIcon icon="fa-soap" size={15} color='white' style={styles.actionButtonText}/>
        </TouchableOpacity>
      </View>

      {/* Action Modal */}
      <PetCareActionModal
        modalVisible={modalVisible}
        actionType={actionType}
        selectedCat={selectedCat}
        performAction={performAction}
        closeModal={closeModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  dropdown: {
    marginHorizontal: 15,
    marginTop: 5,
    height: 50,
    backgroundColor: '#D9FADA',
    borderRadius: 12,
    borderWidth: 2,
    borderColor:'yellow', // set to pale yellow
    padding: 12,
  },
  dropdownContainer: {
    backgroundColor: '#e0e0e0',
  },
  scrollView: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  catScreen: {
    width: Dimensions.get('window').width,
    padding: 15,
  },
  catDetailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1.5,
    borderColor: '#FFF5C3',
    backgroundColor: '#fff',
  },
  actionButton: {
    backgroundColor: 'indigo',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});


export default PetCareScreen;
