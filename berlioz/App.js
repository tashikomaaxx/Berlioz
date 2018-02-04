import React from 'react';
import { Linking, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
const Home = require('./index.html');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
      click: 0,
      wrong: false,
      tolerance_ms: 500,
      timeout: setTimeout(() => { this.check(); }, 1000),
      location: 'LogScreen',
      classes: 'ready',
      pass: [0, 373, 556, 724, 1173, 2038, 2463],
    }
  }

  check = () => {
    // check password
    (this.state.wrong || this.state.click != this.state.pass.length) ? this.error() : this.success();
    this.setState({ click: 0 });
  }

  click = (e) => {
    if(this.state.click === 0) {
      this.setState({ 
        start: new Date(),
        wrong: false,
      });
    } else {
      this.setState({ end: new Date() });
      if(Math.abs((this.state.end - this.state.start) - pass[this.state.click]) > tolerance_ms)
        this.setState({ wrong: ture });
    }
    this.status('');
    this.setState({ click: this.state.click++});
    clearTimeout(this.state.timeout);
    this.state.timeout = setTimeout(() => { this.check(); }, 1000);
  }

  success = () => {
    // success callback
    this.status('success');
    this.setState({ location: 'Home' });
    console.log('______success_____')
    Linking.openURL('http://moutarlieraldwin.com/Home');
  }

  error = () => {
    // error callback
    this.status('error');
  }

  status = (stat) => {
    this.setState({ classes: `${stat}`});
  }

  render() {
    return (
      <View style={styles.container} className={this.state.classes}>
        <TouchableHighlight 
          onPress={this.click}
        >
        <Text>
          bonjour
        </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
