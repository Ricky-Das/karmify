import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';
import AppLogo from "../../../components/appImages/AppLogo.png";
import AccentButton from '../../../components/AccentButton';
import { router } from 'expo-router';

const LoginScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = () => {
        // Add your login logic here
    };

    return (
        <View style={styles.container}>
            <Image source={AppLogo} style={styles.logo} resizeMode="contain" />
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder='confirm password'
                secureTextEntry value={confirmPassword}
                onChangeText={setConfirmPassword}
            />


            <AccentButton onPress={handleLogin}>Login</AccentButton>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.registerText}>Already haven an account?</Text>
                <Button title="Register" onPress={() => router.push("../register")} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 0,
    },
    registerText: {
        marginTop: 8.7,
        fontSize: 17,
        marginRight: -4
    },
});

export default LoginScreen;