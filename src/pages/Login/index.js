import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import styles from './styles';

import Logo from '../assets/logo.png';

const Login = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            enabled={Platform.OS === 'ios'}
            behavior="padding"
        >
            <Image source={Logo} />

            <View style={styles.form}>

                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false} />

                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar Spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;

