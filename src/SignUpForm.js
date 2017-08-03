/**
 * Created by Nidhishah123 on 3/8/17.
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import {
    FormInput,
    FormLabel,
    Button,
    FormValidationMessage
} from 'react-native-elements';

class SignUpForm extends Component {
    state = {phone: '', error: ''};

    onSignUp = async() => {
        const ROOT_URL = 'https://us-central1-one-time-password-4c434.cloudfunctions.net';
        try {
            await axios.post(`${ROOT_URL}/createUser`, {phone: this.state.phone});
            await axios.post(`${ROOT_URL}/requestOTP`, {phone: this.state.phone});
        } catch (err) {
            console.log(err);
            this.setState({error: 'Something went wrong...'});
        }
    };

    render() {
        return (
            <View>

                <View style={{ marginBottom: 10 }}>
                    <FormLabel labelStyle={{ fontSize: 17, color:'#133', fontWeight: '400' }}>
                        Enter Phone Number
                    </FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={(value) => this.setState({ phone: value, error:'' })}
                    />
                </View>

                <Button
                    title="Submit"
                    backgroundColor='green'
                    onPress={this.onSignUp}
                />

                <FormValidationMessage> {this.state.error} </FormValidationMessage>
            </View>
        );
    }
}

export default SignUpForm;