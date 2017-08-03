/**
 * Created by lcom71 on 2/8/17.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

class App extends Component {

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyB_K00djhwRWp0WxZIvU-MRmk7r45uvreM",
            authDomain: "one-time-password-4c434.firebaseapp.com",
            databaseURL: "https://one-time-password-4c434.firebaseio.com",
            projectId: "one-time-password-4c434",
            storageBucket: "one-time-password-4c434.appspot.com",
            messagingSenderId: "754439058760"
        };
        firebase.initializeApp(config);
    }

    render(){
        return(
            <View style={styles.rootContainer}>
                <SignUpForm/>
                <LoginForm/>
            </View>
        );
    }
}

const styles = {
    rootContainer: {
        flex:1,
        justifyContent: 'space-around'
    }
};

export default App;