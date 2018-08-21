import React, { Component } from 'react';
import {
    Picker,
    View,
    StyleSheet
} from 'react-native';

export default class Touchables extends Component {
  constructor(props) {
      super(props);

      this.state = {
          'animal': '',
      }
  }

  render() {
    return (
      <View>
        <Picker
          style={styles.picker}
          mode={'dropdown'}                     // 'dialog' is default, try 'dropdown'
          prompt={'Select Favourite Animal'}    // Android only, available in 'dialog' mode
          selectedValue={this.state.animal}
          onValueChange={
              (itemValue, itemIndex) => this.setState({animal: itemValue})
          }>
          <Picker.Item label="Cat" value="cat" />
          <Picker.Item label="Chicken" value="chicken" />
          <Picker.Item label="Dog" value="dog" />
          <Picker.Item label="Duck" value="duck" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   picker: {
      color: 'maroon',
      margin: 10,
   }
})