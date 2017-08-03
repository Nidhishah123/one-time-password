/**
 * Created by lcom71 on 3/8/17.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import {FormInput, Button, FormLabel, FormValidationMessage} from 'react-native-elements';
import axios from 'axios';

class LoginForm extends Component {
    state = {phone: '', code: '', token: '', error:''};

    onLogin = async() => {
        const {phone, code} = this.state;
        const verifyOTP_Url = 'https://us-central1-one-time-password-4c434.cloudfunctions.net/verifyOTP';
        try {
            let { data } = await axios.post(verifyOTP_Url, {phone, code})

            firebase.auth().signInWithCustomToken(data.token);
        } catch (err) {
            this.setState({ error: 'Wrong input...try again' });
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
                        onChangeText={(value) => this.setState({ phone: value, error: '' })}
                    />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel labelStyle={{ fontSize: 17, color:'#133', fontWeight: '400' }}>
                        Enter Code
                    </FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={(value) => this.setState({ code: value, error: '' })}
                    />
                </View>

                <Button
                    title="Submit"
                    backgroundColor='green'
                    onPress={this.onLogin}
                />
                <FormValidationMessage> {this.state.error} </FormValidationMessage>
            </View>
        )
    }
}

export default LoginForm;