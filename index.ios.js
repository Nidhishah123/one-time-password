/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

export default class one_time_password extends Component {
    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('one_time_password', () => one_time_password);