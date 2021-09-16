import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';
class Nd extends
Component
{
    _storeData = async () => {
  try {
    await AsyncStorage.setItem(
      '@MySuperStore:key',
      'I like to save it.'
    );
  } catch (error) {
    // Error saving data
  }
};
    render()
    {
        return (
            <div>

            </div>
        );
    }
}

export default
Nd;