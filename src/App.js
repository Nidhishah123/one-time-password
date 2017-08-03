/**
 * Created by lcom71 on 2/8/17.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import SignUpForm from './SignUpForm';

class App extends Component {
    render(){
        return(
            <View style={styles.rootContainer}>
                <SignUpForm/>
            </View>
        );
    }
}

const styles = {
    rootContainer: {
        flex:1
    }
};

export default App;