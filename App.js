
import { StyleSheet, Text, View, } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';
import React, { Component, useState } from 'react';

export default class App extends Component {
  state = { displayvalue: '0' }
  addDigit = n => { this.setState({ displayvalue: n }) }
  clearmemory = () => { this.setState({ displayvalue: '0' }) }
  setoperation = operation => { }
  render() {
    return (
      < View style={styles.container} >
        <Display value={this.state.displayvalue} />
        <View style={styles.buttons} >
          <Button label='AC' triple onClick={this.clearmemory} />
          <Button label='/' operation onClick={() => this.setoperation('/')} />
          <Button label='7' onClick={this.addDigit} />
          <Button label='8' onClick={this.addDigit} />
          <Button label='9' onClick={this.addDigit} />
          <Button label='*' operation onClick={() => this.setoperation('*')} />
          <Button label='4' onClick={this.addDigit} />
          <Button label='5' onClick={this.addDigit} />
          <Button label='6' onClick={this.addDigit} />
          <Button label='-' operation onClick={() => this.setoperation('-')} />
          <Button label='1' onClick={this.addDigit} />
          <Button label='2' onClick={this.addDigit} />
          <Button label='3' onClick={this.addDigit} />
          <Button label='+' operation onClick={() => this.setoperation('+')} />
          <Button label='0' double onClick={this.addDigit} />
          <Button label='.' onClick={() => this.addDigit('.')} />
          <Button label='=' operation onClick={() => this.setoperation('=')} />
        </View>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }

});

