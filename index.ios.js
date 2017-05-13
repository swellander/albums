//Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Creat a component
const App = () => (
  <Text>Here is some text</Text>
);


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
