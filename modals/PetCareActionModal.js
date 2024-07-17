import React from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

const ActionModal = ({ modalVisible, actionType, selectedCat, performAction, closeModal }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>{`Do you want to ${actionType} ${selectedCat.name}?`}</Text>
          <Button title="Yes" onPress={performAction} />
          <Button title="No" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default ActionModal;
